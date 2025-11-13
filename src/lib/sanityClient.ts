import { createClient } from "next-sanity";

export const projectId = 'yourprojectId'
export const dataset = 'yourDataSet'
const apiVersion = '2025-11-10'

export const sanityClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false
})