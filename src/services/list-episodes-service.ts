import { repoPodcast } from "../repositories/podcast-repository"

export const listEpisode = async () => {
    
    const data = await repoPodcast()

    return data
}