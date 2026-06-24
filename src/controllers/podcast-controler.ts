// controla entrada e saida de podcasts


import { IncomingMessage, ServerResponse } from 'http';
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import {listEpisode} from "../services/list-episodes-service"

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

    const content = await listEpisode()

    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(content))
};

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const queryString: string = req.url?.split("?p=")[1] ?? ""

    const content = await serviceFilterEpisodes(queryString)

    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify(content))
}