import {FC} from "react";
import {PageHome} from "../components/Page/PageHome";

const HomePage: FC<{ comics }> = ({comics}) => {
    return <PageHome comics={comics}/>;
};

export default HomePage;


export const getServerSideProps = async () => {
    const result = await fetch('http://localhost:3000/api/comics?orderBy=-onsaleDate', {
        method: 'GET'
    });
    const comics = await result.json();

    return {
        props: {
            comics
        }
    }
}
