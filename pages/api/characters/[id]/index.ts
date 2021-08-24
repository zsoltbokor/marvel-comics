import {doCache, isCached} from "../../_dbHelper";
import {makeRequest} from "../../_requestHelper";

const requestHandler = async (req, res) => {
    const queries = {...req.query};

    delete queries.id;

    const cached = await isCached('character_details', `character/${req.query.id}`, queries);

    if (cached) {
        return res.status(200).json(cached.data);
    }

    const result = await makeRequest(`character/${req.query.id}`, queries);
    await doCache('character_details', `character/${req.query.id}`, queries, result.data);

    res.status(200).json(result.data);
}

export default requestHandler;
