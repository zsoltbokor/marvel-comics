import {FC} from "react";
import Link from 'next/link';
import {PortraitCardImage, PortraitCardWrapper, CardTitle} from "./CardSliderPortrait.css";

export const CardSliderPortrait: FC<{data}> = ({data}) => {
  return (
      <Link href={`/comics/${data.id}`}>
          <PortraitCardWrapper>
              <PortraitCardImage src={`${data?.thumbnail?.path}/portrait_uncanny.jpg`} />
              <CardTitle>{data.title}</CardTitle>
          </PortraitCardWrapper>
      </Link>
  )
}
