import {makeRequest} from "../_requestHelper";

const requestHandler = async (req, res) => {

    const term = req.query?.q;

    if(!term) {
        return res.status(400).json({message: "Missing 'q' query"})
    }

    const requests = [
        makeRequest('comics', {
            titleStartsWith: term,
            orderBy:'-onsaleDate',
            limit: 20,
            hasDigitalIssue: true
        }),
        makeRequest('events', {
            nameStartsWith: term,
            orderBy:'-modified',
            limit: 20,
        }),
        makeRequest('series', {
            titleStartsWith: term,
            orderBy:'-modified',
            limit: 20,
        }),
    ];

    const result = await Promise.all(requests);

    res.status(200).json({
        comics: result[0].data.results,
        events: result[1].data.results,
        series: result[2].data.results
    })
}

export default requestHandler;
