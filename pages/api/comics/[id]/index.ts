import {doCache, isCached} from "../../_dbHelper";
import {makeRequest} from "../../_requestHelper";

const requestHandler = async (req, res) => {
    const queries = {...req.query};

    delete queries.id;

    const cached = await isCached('comics_details', `comics/${req.query.id}`, queries);

    if (cached) {
        return res.status(200).json(cached.data);
    }

    const result = await makeRequest(`comics/${req.query.id}`, queries);
    await doCache('comics_details', `comics/${req.query.id}`, queries, result.data);

    res.status(200).json(result.data);
}

export default requestHandler;
