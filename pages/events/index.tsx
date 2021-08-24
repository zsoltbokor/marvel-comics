import {FC} from "react";
import {getURL} from "../../utils/fnUtils";
import {PageGrid} from "../../components/Page/PageGrid";

const EventsPage: FC<{ events }> = ({events}) => {
    return (
        <PageGrid data={events} title={'All events'} domain={'events'}/>
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
