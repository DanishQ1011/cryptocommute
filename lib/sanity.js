import { createClient } from "next-sanity"

export const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: 'v1',
    token: process.env.SANITY_TOKEN,
    useCdn: false,
})