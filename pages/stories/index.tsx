import {FC} from "react";
import {getURL} from "../../utils/fnUtils";
import {PageGrid} from "../../components/Page/PageGrid";

const StoriesPage: FC<{stories}> = ({stories}) => {
    return (
        <PageGrid data={stories} title={'All stories'} domain={'stories'} />
    );
}

export default StoriesPage;


export const getStaticProps = async () => {
    const result = await fetch(getURL(`stories`), {
        method: 'GET'
    });
    const stories = await result.json();

    return {
        props: {
            stories
        },
        revalidate: 60
    }
}
