import React, {FC} from "react";
import {
    DetailDescription,
    DetailsTitle,
    InnerWrapper,
    Section,
    TeaserWrapper,
    Wrapper
} from "./PageCharacterDetail.css";
import {Overlay} from "../../style/reusable";
import {Grid} from "../Grid/Grid";

export const PageCharacterDetail: FC<{ character }> = ({character}) => {

    console.log(character);

    return (
        <Wrapper>
            <TeaserWrapper>
                <img src={`${character.thumbnail.path}/landscape_incredible.jpg`}/>
                <Overlay/>
            </TeaserWrapper>

            <InnerWrapper>
                <DetailsTitle>{character.name}</DetailsTitle>
                <DetailDescription>{character.description}</DetailDescription>

                <Section>
                    {character.comics.items.length > 0 && (
                        <Grid data={character.comics.items.map(c => {
                            return {...c, domain: 'comics'}
                        })} title={'Comics of Character'} justifyContent={'flex-start'} titleAlignment={'left'} />
                    )}
                </Section>

                <Section>
                    {character.series.items.length > 0 && (
                        <Grid data={character.series.items.map(c => {
                            return {...c, domain: 'series'}
                        })} title={'Series of Character'} justifyContent={'flex-start'} titleAlignment={'left'} />
                    )}
                </Section>
            </InnerWrapper>
        </Wrapper>
    );
}
