import {FC} from "react";
import {getURL} from "../../../utils/fnUtils";
import {PageEventDetails} from "../../../components/Page/PageEventDetails";
import Head from "next/head";

const EventDetailPage: FC<{event}> = ({event}) => {
  return (
      <>
        <Head>
          <title>{`${event.title} - Events - Marvel Universe`}</title>
          <meta name="description" content={event.description} />
        </Head>

        <PageEventDetails event={event} />
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
