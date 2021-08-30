import {FC} from "react";
import {getURL} from "../../../utils/fnUtils";
import Head from "next/head";
import {PageCharacterDetail} from "../../../components/Page/PageCharacterDetail";

const CharacterDetailPage: FC<{character}> = ({character}) => {
  if(!character) {
    return null;
  }

  return (
      <>
        <Head>
          <title>{`${character.name} - Characters - Marvel Universe`}</title>
          <meta name="description" content={character.description} />
        </Head>
        <PageCharacterDetail character={character} />
      </>
  );
}

export default CharacterDetailPage;

export const getStaticPaths = async () => {
  const result = await fetch(getURL(`characters`), {
    method: 'GET'
  });
  const characters = await result.json();

  return {
    paths: characters.results.map(s => {
      return {params: {id: `${s.id}`}};
    }),
    fallback: 'blocking'
  }
}

export const getStaticProps = async (context) => {
  const result = await fetch(getURL(`characters/${context.params.id}`), {
    method: 'GET'
  });

  const characters = await result.json();

  return {
    props: {
      character: characters.results[0]
    },
    revalidate: 60
  }
}
