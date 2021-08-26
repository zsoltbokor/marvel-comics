import {FC} from "react";
import {getURL} from "../../../utils/fnUtils";
import {PageSeriesDetails} from "../../../components/Page/PageSeriesDetails";
import Head from "next/head";

const SeriesDetailPage: FC<{series}> = ({series}) => {
  return (
      <>
        <Head>
          <title>{`${series.title} - Comics - Marvel Universe`}</title>
          <meta name="description" content={series.description} />
        </Head>
        <PageSeriesDetails data={series} />
      </>
  )
}

export default SeriesDetailPage;

export const getStaticPaths = async () => {
  const result = await fetch(getURL(`series`), {
    method: 'GET'
  });
  const series = await result.json();

  return {
    paths: series.results.map(s => {
      return {params: {id: `${s.id}`}};
    }),
    fallback: true
  }
}

export const getStaticProps = async (context) => {
  const result = await fetch(getURL(`series/${context.params.id}`), {
    method: 'GET'
  });

  const series = await result.json();

  return {
    props: {
      series: series.results[0]
    },
    revalidate: 60
  }
}
