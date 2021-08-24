import React, {FC} from "react";
import {CreatorsList, CreatorsWrapper, DetailImageWrapper, DetailsInfoWrapper, DetailsWrapper} from "./PageComicDetails.css";
import {CardContainer, SliderContainer, SliderTitle} from "../SliderWrapper/SliderWrapper.css";
import {Slider} from "../Slider/Slider";
import {CardCharacter} from "../Card/CardCharacter";
import Link from "next/link";

export const PageComicDetails: FC<{details}> = ({details}) => {
    return (
        <DetailsWrapper>
            <DetailImageWrapper>
                <img src={`${details.thumbnail.path}/clean.jpg`} />
            </DetailImageWrapper>
            <DetailsInfoWrapper>
                <h1>{details.title}</h1>
                <p>{details.description}</p>

                {details.characters.items.length > 0 && (
                    <SliderContainer>
                        <SliderTitle>{'Characters'}</SliderTitle>
                        <CardContainer>
                            <Slider
                                arrowLeft={'<'}
                                arrowRight={'>'}
                                scrollable
                            >
                                {details.characters.items.map((character, i) => <CardCharacter key={`${i}`} data={character} />)}
                            </Slider>
                        </CardContainer>
                    </SliderContainer>
                )}

                {details.creators.items.length > 0 && (
                    <CreatorsWrapper>
                        <h3>Creators</h3>
                        <CreatorsList>
                            {details.creators.items.map((creator, i)=>{
                                return (
                                    <Link key={`creator-${i}`} href={`/creator/${creator.name}`}>
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
