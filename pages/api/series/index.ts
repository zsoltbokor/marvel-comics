import nc from "next-connect";
import cors from "cors";

import {makeRequest} from "../_requestHelper";
import {doCache, isCached} from "../_dbHelper";

const requestHandler = nc()
    .use(cors())
    .get(async (req, res) => {
            // @ts-ignore
            const cached = await isCached('series', 'series', req.query);

            if (cached) {
                // @ts-ignore
                return res.status(200).json(cached.data);
            }

            // @ts-ignore
            const result = await makeRequest('series', req.query);
            // @ts-ignore
            await doCache('series', 'series', req.query, result.data);

            // @ts-ignore
            res.status(200).json(result.data)
        }
    );

export default requestHandler;
