import { createClient } from "next-sanity";

export const projectId = 'tjpldp3n'
export const dataset = 'production'
const apiVersion = '2025-11-10'

export const sanityClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false
})