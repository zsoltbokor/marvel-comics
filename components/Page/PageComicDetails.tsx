import React, {FC, useState} from "react";
import {
    CharactersWrapper,
    DataList,
    ListWrapper,
    DetailDescription,
    DetailImageWrapper,
    DetailsInfoWrapper,
    DetailsWrapper,
    DetailTitle, ListInfo,
    SectionTitle
} from "./PageComicDetails.css";
import {CardCharacter} from "../Card/CardCharacter";
import Link from "next/link";
import Image from "next/image";
import {getId} from "../../utils/fnUrl";

export const PageComicDetails: FC<{ details }> = ({details}) => {
    const [isImageError, setIsImageError] = useState<boolean>(false);

    const imgSrc = `${details.thumbnail.path}/clean.jpg`;

    return (
        <DetailsWrapper imageError={isImageError}>
            <DetailImageWrapper>
                <Image
                    src={imgSrc}
                    width={500}
                    height={700}
                    alt={details.title}
                    onError={()=>{
                        setIsImageError(true);
                    }}
                />
            </DetailImageWrapper>
            <DetailsInfoWrapper>
                <DetailTitle data-testid={'title'}>{details.title}</DetailTitle>
                <DetailDescription data-testid={'description'} dangerouslySetInnerHTML={{__html: details.description}}/>

                {details.characters.items.length > 0 && (
                    <CharactersWrapper data-testid={'characters-grid'}>
                        <SectionTitle>Characters</SectionTitle>
                        {details.characters.items.map((character, i) => <CardCharacter key={`${i}`} data={{...character, domain: 'characters'}}/>)}
                    </CharactersWrapper>
                )}


                <ListInfo>
                    {details.creators.items.length > 0 && (
                        <ListWrapper data-testid={'creators-list'}>
                            <SectionTitle>Creators</SectionTitle>
                            <DataList>
                                {details.creators.items.map((creator, i) => {
                                    return (
                                        <Link key={`creator-${i}`} href={`/creators/${getId(creator.resourceURI)}`}>
                                            <li>
                                                {creator.name}
                                            </li>
                                        </Link>
                                    )
                                })}
                            </DataList>
                        </ListWrapper>
                    )}

                    {details.stories.items.length > 0 && (
                        <ListWrapper data-testid={'stories-list'}>
                            <SectionTitle>Stories</SectionTitle>
                            <DataList>
                                {details.stories.items.map((story, i) => {
                                    return (
                                        <Link key={`story-${i}`} href={`/stories/${getId(story.resourceURI)}`}>
                                            <li>
                                                {story.name}
                                            </li>
                                        </Link>
                                    )
                                })}
                            </DataList>
                        </ListWrapper>
                    )}
                </ListInfo>
            </DetailsInfoWrapper>
        </DetailsWrapper>
    )
}
