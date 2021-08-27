import {FC} from "react";
import Link from 'next/link'
import {ButtonNext, ButtonPrevious, NavigationContainer} from "./Navigation.css";

export const Navigation: FC<{ next, previous }> = ({next, previous}) => {

    if(!next && !previous) return null;

    return (
        <NavigationContainer>
            {previous && (
                <Link href={previous.link} passHref>
                    <ButtonPrevious>{previous.label || 'Previous'}</ButtonPrevious>
                </Link>
            )}
            {next && (
                <Link href={next.link} passHref>
                    <ButtonNext>{next.label || 'Next'}</ButtonNext>
                </Link>
            )}
        </NavigationContainer>
    )
}
