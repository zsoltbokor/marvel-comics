import {FC, useEffect, useRef, useState} from "react";
import Link from 'next/link';
import {CardTitle, ImageWrapper, PortraitCardImage, PortraitCardWrapper} from "./CardPortrait.css";
import {getId} from "../../utils/fnUrl";

export const CardPortrait: FC<{ data }> = ({data}) => {
    const imageRef = useRef<HTMLImageElement>();
    const [objectFill, setObjectFill] = useState<'cover' | 'contain'>('cover');

    useEffect(()=>{
        if(!data?.thumbnail?.path) {
            setObjectFill('contain');
        }
    }, [data]);

    return (
        <Link href={`/${data.domain}/${data.id || getId(data.resourceURI)}`} passHref>
            <PortraitCardWrapper data-testid={'card-portrait'}>
                <ImageWrapper>
                    <PortraitCardImage
                        ref={imageRef}
                        objectFill={objectFill}
                        onError={() => {
                            imageRef.current.src = '/no-image.png';
                            setObjectFill('contain');
                        }}
                        src={data.thumbnail ? `${data?.thumbnail?.path}/portrait_uncanny.jpg` : '/no-image.png'}/>
                </ImageWrapper>
                <CardTitle>{data.title || data.name}</CardTitle>
            </PortraitCardWrapper>
        </Link>
    )
}
