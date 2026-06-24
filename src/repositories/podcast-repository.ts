import fs from "fs"
import path from "path"
3
const pathData = path.join(__dirname, "../repositories/podcast.json")

export const repositoryPodcast = async (podcastName?: string) => { // interrogacao deixa o parametro opcional 
    const rawData = fs.readFileSync(pathData, "utf-8")
    let jsonFile = JSON.parse(rawData)

    if (podcastName) { // se receber algum valor
        jsonFile = jsonFile.filter((podcast: { podcastName: string })=>podcast.podcastName === podcastName)
    }

    return jsonFile
}