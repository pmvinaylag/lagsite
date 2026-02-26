const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN || '';

const BASE_URL = 'https://api.hubapi.com';

function hubspotHeaders() {
    return {
        'Authorization': `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
    };
}

// ─── TYPES ───────────────────────────────────────
export interface HubSpotJob {
    id: string;
    subject: string;
    content: string;
    priority: string;
    location: string;
    client: string;
    slug: string;
}

export interface HubSpotDeal {
    id: string;
    dealname: string;
    dealstage: string;
    stageName: string;
    pipeline: string;
    client: string;
    role: string;
    clientSlug: string;
}

export interface PipelineStage {
    id: string;
    label: string;
    displayOrder: number;
}

// ─── PIPELINE CONFIG ─────────────────────────────
// Our 7 hiring stages (from the API output)
export const HIRING_STAGES: Record<string, string> = {
    '3242746599': '1. Sourced & Enriched',
    '3242313416': '2. Initial Outreach',
    '3242746600': '3. Screening Call',
    '3242313417': '4. Client Interview',
    '3242313418': '5. Offer Extended',
    '3242313419': '6. Placed / Hired',
    '3242746601': '7. Rejected / Dropped',
};

// ─── JOBS (Tickets CMS) ──────────────────────────
export async function getHubSpotJobs(): Promise<HubSpotJob[]> {
    if (!HUBSPOT_ACCESS_TOKEN) {
        console.warn('HUBSPOT_ACCESS_TOKEN is missing. Returning empty jobs array.');
        return [];
    }

    try {
        const res = await fetch(
            `${BASE_URL}/crm/v3/objects/tickets?limit=100&properties=subject,content,hs_ticket_priority,hs_pipeline_stage`,
            { headers: hubspotHeaders(), next: { revalidate: 300 } } // 5-min cache
        );
        if (!res.ok) throw new Error(`HubSpot Tickets API error: ${res.status}`);
        const data = await res.json();

        return data.results.map((ticket: any) => {
            const props = ticket.properties;
            const slug = props.subject
                ? props.subject.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
                : ticket.id;
            return {
                id: ticket.id,
                subject: props.subject || 'Untitled Role',
                content: props.content || '',
                priority: props.hs_ticket_priority || 'MEDIUM',
                location: 'Remote / Hybrid',
                client: 'Confidential Client',
                slug,
            };
        });
    } catch (error) {
        console.error('Error fetching jobs from HubSpot:', error);
        return [];
    }
}

export async function getHubSpotJobBySlug(slug: string): Promise<HubSpotJob | null> {
    const allJobs = await getHubSpotJobs();
    return allJobs.find(job => job.slug === slug) || null;
}

// ─── DEALS (Candidate Kanban) ─────────────────────
export async function getHubSpotDeals(limit = 100): Promise<HubSpotDeal[]> {
    if (!HUBSPOT_ACCESS_TOKEN) return [];

    try {
        const params = new URLSearchParams({
            limit: String(limit),
        });
        params.append('properties', 'dealname');
        params.append('properties', 'dealstage');
        params.append('properties', 'pipeline');
        params.append('properties', 'lagence_client');
        params.append('properties', 'lagence_role');
        params.append('properties', 'lagence_client_slug');
        const res = await fetch(
            `${BASE_URL}/crm/v3/objects/deals?${params.toString()}`,
            { headers: hubspotHeaders(), next: { revalidate: 60 } }
        );
        if (!res.ok) {
            const errText = await res.text();
            throw new Error(`HubSpot Deals API error: ${res.status} — ${errText}`);
        }
        const data = await res.json();

        return data.results.map((deal: any) => {
            const stageId = deal.properties.dealstage;
            return {
                id: deal.id,
                dealname: deal.properties.dealname || 'Unknown Candidate',
                dealstage: stageId,
                stageName: HIRING_STAGES[stageId] || 'Unknown Stage',
                pipeline: deal.properties.pipeline,
                client: deal.properties.lagence_client || 'Unknown',
                role: deal.properties.lagence_role || '',
                clientSlug: deal.properties.lagence_client_slug || '',
            };
        });
    } catch (error) {
        console.error('Error fetching deals from HubSpot:', error);
        return [];
    }
}

// ─── PIPELINE METRICS (for client portal) ────────
export interface KanbanColumn {
    stageId: string;
    label: string;
    count: number;
    deals: HubSpotDeal[];
}

export async function getHiringKanban(): Promise<KanbanColumn[]> {
    const deals = await getHubSpotDeals();

    // Build one column per stage, in order
    const columns: KanbanColumn[] = Object.entries(HIRING_STAGES).map(([id, label]) => ({
        stageId: id,
        label,
        count: 0,
        deals: [],
    }));

    for (const deal of deals) {
        const col = columns.find(c => c.stageId === deal.dealstage);
        if (col) {
            col.deals.push(deal);
            col.count++;
        }
    }

    return columns;
}
