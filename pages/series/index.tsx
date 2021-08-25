import {FC} from "react";
import {getURL} from "../../utils/fnUtils";
import {PageGrid} from "../../components/Page/PageGrid";
import Head from "next/head";

const SeriesPage: FC<{ series }> = ({series}) => {
    return (
        <>
            <Head>
                <title>Series - Marvel Universe</title>
                <meta name="description" content="Marvel series" />
            </Head>
            <PageGrid data={series} title={'All series'} domain={'series'}/>
        </>
    );
}

export default SeriesPage;


export const getStaticProps = async () => {
    const result = await fetch(getURL(`series`), {
        method: 'GET'
    });
    const series = await result.json();

    return {
        props: {
            series
        },
        revalidate: 60
    }
}
