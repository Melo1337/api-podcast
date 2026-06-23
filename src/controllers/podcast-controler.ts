// controla entrada e saida de podcasts

import { IncomingMessage, ServerResponse } from 'http';

import {listEpisode} from "../services/list-episodes-service"

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

    const content = await listEpisode()

    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(content))
};