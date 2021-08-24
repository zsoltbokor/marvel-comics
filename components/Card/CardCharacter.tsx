import {FC} from "react";
import { CardWrapper } from "components/Slider/Slider.css";
import {CardCharacterWrapper} from "./CardCharacter.css";

export const CardCharacter: FC<{data}> = ({data}) => {
  return (
      <CardWrapper>
        <CardCharacterWrapper />
        <span>{data.name}</span>
      </CardWrapper>
  )
}
