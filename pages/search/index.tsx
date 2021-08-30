import {FC} from "react";
import {PageSearch} from "../../components/Page/PageSearch";
import Head from "next/head";
import {useRouter} from "next/router";

const SearchPage: FC = () => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>{`Search${router?.query?.q ? ` results for ${router.query.q}` : ''} - Marvel Universe`}</title>
            </Head>
            <PageSearch/>
        </>
    );
}

export default SearchPage;
