import {makeRequest} from "../_requestHelper";
import nc from "next-connect";
import cors from "cors";

const requestHandler = nc()
    .use(cors())
    .get(async (req: any, res: any) => {

        const term = req.query?.q;

        if (!term) {
            return res.status(400).json({message: "Missing 'q' query"})
        }

        const result = await Promise.all([
            makeRequest('comics', {
                titleStartsWith: term,
                orderBy: '-onsaleDate',
                limit: 20,
                hasDigitalIssue: true
            }),
            makeRequest('events', {
                nameStartsWith: term,
                orderBy: '-modified',
                limit: 20,
            }),
            makeRequest('series', {
                titleStartsWith: term,
                orderBy: '-modified',
                limit: 20,
            }),
            makeRequest('characters', {
                nameStartsWith: term,
                orderBy: '-modified',
                limit: 20,
            }),
        ]);

        res.status(200).json({
            comics: {
                title: 'Comics',
                data: result[0].data.results.map(res =>{
                    return {
                        ...res,
                        domain: 'comics'
                    }
                })
            },
            events: {
                title: 'Events',
                data: result[1].data.results.map(res =>{
                    return {
                        ...res,
                        domain: 'events'
                    }
                })
            },
            series: {
                title: 'Series',
                data: result[2].data.results.map(res =>{
                    return {
                        ...res,
                        domain: 'series'
                    }
                })
            },
            characters: {
                title: 'Characters',
                data: result[3].data.results.map(res =>{
                    return {
                        ...res,
                        domain: 'characters'
                    }
                })
            }
        })
    });

export default requestHandler;
