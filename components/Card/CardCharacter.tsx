import {FC, useRef} from "react";
import Link from 'next/link';
import {CardCharacterWrapper, CardHolder, CardImage, CharacterName} from "./CardCharacter.css";
import {getId} from "../../utils/fnUrl";

export const CardCharacter: FC<{ data; context?: 'grid' | 'details' }> = ({data, context = 'details'}) => {

    const imageRef = useRef<HTMLImageElement>();

    return (
        <Link href={`/${data.domain}/${data.id || getId(data.resourceURI)}`} passHref>
            <CardHolder context={context} data-testid={'card-character'}>
                <CardCharacterWrapper context={context}>
                    <CardImage
                        ref={imageRef}
                        src={data.thumbnail ? `${data?.thumbnail?.path}/portrait_uncanny.jpg` : '/character-no-image.png'}
                        onError={() => {
                            imageRef.current.src = '/character-no-image.png'
                        }}
                    />
                </CardCharacterWrapper>
                <CharacterName>{data.name}</CharacterName>
            </CardHolder>
        </Link>
    )
}
