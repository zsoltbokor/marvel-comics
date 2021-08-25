import {FC} from "react";
import {getURL} from "../../utils/fnUtils";
import {PageGrid} from "../../components/Page/PageGrid";
import Head from "next/head";

const EventsPage: FC<{ events }> = ({events}) => {
    return (
        <>
            <Head>
                <title>Events - Marvel Universe</title>
                <meta name="description" content="Marvel events" />
            </Head>
            <PageGrid data={events} title={'All events'} domain={'events'}/>
        </>
    );
}

export default EventsPage;

export const getStaticProps = async () => {
    const result = await fetch(getURL(`events`), {
        method: 'GET'
    });

    const events = await result.json();

    return {
        props: {
            events
        },
        revalidate: 60
    }
}
