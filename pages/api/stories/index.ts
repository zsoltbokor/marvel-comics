import nc from "next-connect";
import cors from "cors";

import {makeRequest} from "../_requestHelper";
import {doCache, isCached} from "../_dbHelper";

const requestHandler = nc()
    .use(cors())
    .get(async (req, res) => {
            // @ts-ignore
            const cached = await isCached('stories', 'stories', req.query);

            if (cached) {
                // @ts-ignore
                return res.status(200).json(cached.data);
            }

            // @ts-ignore
            const result = await makeRequest('stories', req.query);
            // @ts-ignore
            await doCache('stories', 'stories', req.query, result.data);

            // @ts-ignore
            res.status(200).json(result.data)
        }
    );

export default requestHandler;
