import {FC} from "react";
import Link from 'next/link';
import {PortraitCardImage, PortraitCardWrapper, CardTitle} from "./CardPortrait.css";

export const CardPortrait: FC<{data}> = ({data}) => {
  return (
      <Link href={`/${data.domain}/${data.id}`} passHref>
          <PortraitCardWrapper>
              <PortraitCardImage src={`${data?.thumbnail?.path}/portrait_uncanny.jpg`} />
              <CardTitle>{data.title}</CardTitle>
          </PortraitCardWrapper>
      </Link>
  )
}
