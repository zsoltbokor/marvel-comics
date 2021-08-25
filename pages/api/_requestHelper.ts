import md5 from 'md5';
import nc from "next-connect";
import cors from "cors";

import {URLSearchParams} from "url";
import {doCache, isCached} from "./_dbHelper";

export const makeRequest = async (path, queries: { [key: string]: string | number | boolean }) => {
    const ts = Date.now();

    const {API_PUBLIC_KEY, API_PRIVATE_KEY} = process.env;

    const hash: string = md5(ts + API_PRIVATE_KEY + API_PUBLIC_KEY);

    const urlParams = new URLSearchParams();

    urlParams.set('ts', `${ts}`);
    urlParams.set('apikey', API_PUBLIC_KEY);
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
                try {
                    const cached = await isCached(col, path, req.query);

                    if (cached) {
                        return res.status(200).json(cached.data);
                    }

                    const result = await makeRequest(path, req.query);

                    await doCache(col, path, req.query, result.data);

                    res.status(200).json(result.data)
                } catch (e) {
                    res.status(500).json(e);
                }
            }
        );
};

export const getDetails = (col: string, path: string) => {
    return nc()
        .use(cors())
        .get(async (req: any, res: any) => {
            try {
                const queries = {...req.query};

                delete queries.id;

                const cached = await isCached(col, `${path}/${req.query.id}`, queries);

                if (cached) {
                    return res.status(200).json(cached.data);
                }

                const result = await makeRequest(`${path}/${req.query.id}`, queries);
                await doCache(col, `${path}/${req.query.id}`, queries, result.data);

                res.status(200).json(result.data);
            } catch (e) {
                res.status(500).json(e);
            }
        });
}
