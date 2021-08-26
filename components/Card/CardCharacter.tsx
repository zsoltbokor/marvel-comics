import {FC, useState} from "react";
import Link from 'next/link';
import {CardCharacterWrapper, CardHolder, CardImage, CharacterName} from "./CardCharacter.css";

export const CardCharacter: FC<{ data; context?: 'grid' | 'details' }> = ({data, context = 'details'}) => {

    const [imageError, setImageError] = useState<boolean>(false);

    return (
        <Link href={`/${data.domain}/${data.id}`} passHref>
            <CardHolder context={context} data-testid={'card-character'}>
                <CardCharacterWrapper context={context}>
                    {data.thumbnail && !imageError && (
                        <CardImage
                            src={`${data?.thumbnail?.path}/portrait_uncanny.jpg`}
                            onError={()=>setImageError(true)}
                        />
                    )}
                </CardCharacterWrapper>
                <CharacterName>{data.name}</CharacterName>
            </CardHolder>
        </Link>
    )
}
