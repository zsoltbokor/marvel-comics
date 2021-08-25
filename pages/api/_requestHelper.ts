import md5 from 'md5';
import nc from "next-connect";
import cors from "cors";

import {URLSearchParams} from "url";
import {doCache, isCached} from "./_dbHelper";

export const makeRequest = async (path, queries: { [key: string]: string | number | boolean }) => {
    const ts = Date.now();

    const publicKey = 'e63ecc58207197ffd5f0e129a1495b28';
    const privateKey = 'e04f327ffacd708516a793791d1eadbb621e8d73';

    const hash: string = md5(ts + privateKey + publicKey);

    const urlParams = new URLSearchParams();

    urlParams.set('ts', `${ts}`);
    urlParams.set('apikey', publicKey);
    urlParams.set('hash', hash);

    Object.keys(queries).forEach(key => {
        urlParams.set(key, `${queries[key]}`);
    });

    const response = await fetch(`https://gateway.marvel.com:443/v1/public/${path}?${urlParams.toString()}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    });
    return await response.json();
}

export const getList = (col: string, path: string) => {
    return nc()
        .use(cors())
        .get(async (req: any, res: any) => {
                const cached = await isCached(col, path, req.query);

                if (cached) {
                    return res.status(200).json(cached.data);
                }

                const result = await makeRequest(path, req.query);
                await doCache(col, path, req.query, result.data);

                res.status(200).json(result.data)
            }
        );
};

export const getDetails = (col: string, path: string) => {
    return nc()
        .use(cors())
        .get(async (req: any, res: any) => {
            const queries = {...req.query};

            delete queries.id;

            const cached = await isCached(col, `${path}/${req.query.id}`, queries);

            if (cached) {
                return res.status(200).json(cached.data);
            }

            const result = await makeRequest(`${path}/${req.query.id}`, queries);
            await doCache(col, `${path}/${req.query.id}`, queries, result.data);

            res.status(200).json(result.data);
        });
}
