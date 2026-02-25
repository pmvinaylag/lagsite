import { WebflowClient } from "webflow-api";

const webflow = new WebflowClient({
    accessToken: process.env.WEBFLOW_API_TOKEN,
});

export const getJobs = async () => {
    try {
        const collectionId = process.env.WEBFLOW_JOB_COLLECTION_ID;
        if (!collectionId) throw new Error("Missing Collection ID");

        // Use the v2 API via the official SDK
        const items = await webflow.collections.items.listItems(collectionId);
        return items.items || [];
    } catch (error) {
        console.error("Error fetching jobs from Webflow:", error);
        return [];
    }
};

export const getJobBySlug = async (slug: string) => {
    const jobs = await getJobs();
    // The items from the API have the custom fields inside 'fieldData'
    return jobs.find((job: any) => job.fieldData?.slug === slug) || null;
};

export const getTeamMembers = async () => {
    try {
        const collectionId = "658f9e90c7b40fc641ee4579";
        const items = await webflow.collections.items.listItems(collectionId);
        return items.items || [];
    } catch (error) {
        console.error("Error fetching team members from Webflow:", error);
        return [];
    }
};
