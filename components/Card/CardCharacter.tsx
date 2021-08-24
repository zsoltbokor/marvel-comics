import {FC} from "react";
import {CardCharacterWrapper, CardHolder, CharacterName} from "./CardCharacter.css";

export const CardCharacter: FC<{ data }> = ({data}) => {
    return (
        <CardHolder>
            <CardCharacterWrapper/>
            <CharacterName>{data.name}</CharacterName>
        </CardHolder>
    )
}
