import {FC} from "react";
import {PageComics} from "../../components/Page/PageComics";
import {getURL} from "../../utils/fnUtils";

const ComicsPage: FC<{comics}> = ({comics}) => {
  return <PageComics data={comics} />;
}

export default ComicsPage;


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
