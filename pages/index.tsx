import {FC} from "react";
import Head from 'next/head'
import {PageHome} from "../components/Page/PageHome";
import {getURL} from "../utils/fnUtils";

const HomePage: FC<{ comics, series, events }> = ({comics, series, events}) => {
    return (
        <>
            <Head>
                <title>Welcome to Marvel Universe</title>
                <meta name="description" content="Don't miss any goodies" />
            </Head>
            <PageHome comics={comics}
                      series={series}
                      events={events}
            />
        </>
    );
};

export default HomePage;


export const getStaticProps = async () => {
    const comicsResult = await fetch(getURL(`comics?orderBy=-onsaleDate&limit=6&hasDigitalIssue=true`), {
        method: 'GET'
    });

    const seriesResult = await fetch(getURL(`series?limit=6`), {
        method: 'GET'
    });

    const eventsResult = await fetch(getURL(`events?limit=6`), {
        method: 'GET'
    });


    const result = await Promise.all([comicsResult, seriesResult, eventsResult]);
    const data = await Promise.all(result.map(res => res.json()));

    return {
        props: {
            comics: data[0],
            series: data[1],
            events: data[2]
        },
        revalidate: 60
    }
}
