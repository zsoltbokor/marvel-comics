import {FC, useRef} from "react";
import Link from 'next/link';
import {CardTitle, ImageWrapper, PortraitCardImage, PortraitCardWrapper} from "./CardPortrait.css";
import {getId} from "../../utils/fnUrl";

export const CardPortrait: FC<{ data }> = ({data}) => {
    const imageRef = useRef<HTMLImageElement>();

    return (
        <Link href={`/${data.domain}/${data.id || getId(data.resourceURI)}`} passHref>
            <PortraitCardWrapper data-testid={'card-portrait'}>
                <ImageWrapper>
                    {<PortraitCardImage
                        ref={imageRef}
                        onError={() => imageRef.current.src = '/captain.png'}
                        src={data.thumbnail ? `${data?.thumbnail?.path}/portrait_uncanny.jpg` : '/captain.png'}/>}
                </ImageWrapper>
                <CardTitle>{data.title || data.name}</CardTitle>
            </PortraitCardWrapper>
        </Link>
    )
}
