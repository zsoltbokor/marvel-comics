import {makeRequest} from "../_requestHelper";
import {doCache, isCached} from "../_dbHelper";

const requestHandler = async (req, res) => {
    const cached = await isCached('comics', 'comics', req.query);

    if (cached) {
        return res.status(200).json(cached.data);
    }

    const result = await makeRequest('comics', req.query);
    await doCache('comics', 'comics', req.query, result.data);

    res.status(200).json(result.data);
}

export default requestHandler;
