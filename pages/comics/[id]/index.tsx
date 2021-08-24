import {FC} from "react";
import {PageComicDetails} from "../../../components/Page/PageComicDetails";

const ComicDetailPage: FC<{comic}> = ({comic}) => {

    return (
        <PageComicDetails details={comic} />
    )
}

export default ComicDetailPage;


export const getServerSideProps = async (context) => {
    const result = await fetch(`http://localhost:3000/api/comics/${context.params.id}`, {
        method: 'GET'
    });

    const comics = await result.json();

    return {
        props: {
            comic: comics.results[0]
        }
    }
}
