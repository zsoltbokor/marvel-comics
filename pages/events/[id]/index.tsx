import {FC} from "react";
import {PageEventDetails} from "../../../components/Page/PageEventDetails";
import Head from "next/head";
import {getURL} from "../../../utils/fnUtils";

const EventDetailPage: FC<{ event }> = ({event}) => {

    if (!event) {
        return null;
    }

    return (
        <>
            <Head>
                <title>{`${event.title} - Events - Marvel Universe`}</title>
                <meta name="description" content={event.description}/>
            </Head>

            <PageEventDetails event={event}/>
        </>
    )
}

export default EventDetailPage;

export const getStaticPaths = async () => {
  const result = await fetch(getURL(`events`), {
    method: 'GET'
  });
  const events = await result.json();

  return {
    paths: events.results.map(s => {
      return {params: {id: `${s.id}`}};
    }),
    fallback: true
  }
}

export const getStaticProps = async (context) => {
  const result = await fetch(getURL(`events/${context.params.id}`), {
    method: 'GET'
  });

  const events = await result.json();

  return {
    props: {
      event: events.results[0]
    },
    revalidate: 60
  }
}
