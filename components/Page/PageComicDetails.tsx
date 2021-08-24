import React, {FC} from "react";
import {
    CharactersWrapper,
    CreatorsList,
    CreatorsWrapper,
    DetailDescription,
    DetailImageWrapper,
    DetailsInfoWrapper,
    DetailsWrapper,
    DetailTitle,
    SectionTitle
} from "./PageComicDetails.css";
import {CardCharacter} from "../Card/CardCharacter";
import Link from "next/link";
import {getId} from "../../utils/fnUrl";

export const PageComicDetails: FC<{ details }> = ({details}) => {
    return (
        <DetailsWrapper>
            <DetailImageWrapper>
                <img src={`${details.thumbnail.path}/clean.jpg`}/>
            </DetailImageWrapper>
            <DetailsInfoWrapper>
                <DetailTitle>{details.title}</DetailTitle>
                <DetailDescription dangerouslySetInnerHTML={{__html: details.description}}/>

                {details.characters.items.length > 0 && (
                    <CharactersWrapper>
                        <SectionTitle>Characters</SectionTitle>
                        {details.characters.items.map((character, i) => <CardCharacter key={`${i}`} data={character}/>)}
                    </CharactersWrapper>
                )}

                {details.creators.items.length > 0 && (
                    <CreatorsWrapper>
                        <SectionTitle>Creators</SectionTitle>
                        <CreatorsList>
                            {details.creators.items.map((creator, i) => {
                                return (
                                    <Link key={`creator-${i}`} href={`/creator/${getId(creator.resourceURI)}`}>
                                        <li>
                                            {creator.name}
                                        </li>
                                    </Link>
                                )
                            })}
                        </CreatorsList>
                    </CreatorsWrapper>
                )}
            </DetailsInfoWrapper>
        </DetailsWrapper>
    )
}
