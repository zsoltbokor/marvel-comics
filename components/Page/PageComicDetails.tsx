import React, {FC} from "react";
import {DetailImageWrapper, DetailsInfoWrapper, DetailsWrapper} from "./PageComicDetails.css";
import {CardContainer, SliderContainer, SliderTitle} from "../SliderWrapper/SliderWrapper.css";
import {Slider} from "../Slider/Slider";
import {CardCharacter} from "../Card/CardCharacter";

export const PageComicDetails: FC<{details}> = ({details}) => {
    return (
        <DetailsWrapper>
            <DetailImageWrapper>
                <img src={`${details.thumbnail.path}/clean.jpg`} />
            </DetailImageWrapper>
            <DetailsInfoWrapper>
                <h1>{details.title}</h1>
                <p>{details.description}</p>



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
            </DetailsInfoWrapper>
        </DetailsWrapper>
    )
}
