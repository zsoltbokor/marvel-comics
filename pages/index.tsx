import {FC} from "react";
import {PageHome} from "../components/Page/PageHome";
import {getURL} from "../utils/fnUtils";

const HomePage: FC<{ comics }> = ({comics}) => {
    return <PageHome comics={comics}/>;
};

export default HomePage;


export const getStaticProps = async () => {
    const result = await fetch(getURL(`comics?orderBy=-onsaleDate`), {
        method: 'GET'
    });
    const comics = await result.json();

    return {
        props: {
            comics
        },
        revalidate: 60
    }
}
