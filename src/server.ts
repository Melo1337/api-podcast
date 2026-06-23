import * as http from "http";

import { getListEpisodes } from "./controllers/podcast-controler";

const server = http.createServer(
    async (req: http.IncomingMessage, res: http.ServerResponse) => {
        if (req.method === "GET") {
            await getListEpisodes(req, res)
        }
})

const port = process.env.PORT

server.listen(port, () => {
    console.log(`Server porta ${port}`);
})