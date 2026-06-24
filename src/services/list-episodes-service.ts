import { repositoryPodcast } from "../repositories/podcast-repository"

export const listEpisode = async () => {
    
    const data = await repositoryPodcast()

    return data
}