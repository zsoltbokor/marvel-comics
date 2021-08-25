import {FC} from "react";
import {getURL} from "../../utils/fnUtils";
import {PageGrid} from "../../components/Page/PageGrid";

const ComicsPage: FC<{ comics }> = ({comics}) => {
    return (
        // <PageGrid data={comics} title={'All comics'} domain={'comics'} additionalFilter={'hasDigitalIssue=true'}/>
        <></>
    )
}

export default ComicsPage;


// export const getStaticProps = async () => {
//     const result = await fetch(getURL(`comics?orderBy=-onsaleDate&hasDigitalIssue=true`), {
//         method: 'GET'
//     });
//     const comics = await result.json();
//
//     return {
//         props: {
//             comics
//         },
//         revalidate: 60
//     }
// }
