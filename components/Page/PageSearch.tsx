import {InputWrapper, NoResult, ResultWrapper, SearchButton, SearchInput, Wrapper} from "./PageSearch.css";
import Icon from '../../public/search.svg';
import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";
import {getURL} from "../../utils/fnUtils";
import {LoadingIcon} from "../../style/reusable";
import {Grid} from "../Grid/Grid";

export const PageSearch = () => {

    const inputRef = useRef<HTMLInputElement>();
    const router = useRouter();
    const [searching, setSearching] = useState<boolean>(false);
    const [result, setResult] = useState<any | null>(null);

    const doSearch = () => {
        router.replace(`/search?q=${inputRef.current.value}`);
    }

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            doSearch();
        }
    }

    const makeSearch = async () => {
        if (!router.query.q) {
            return;
        }

        inputRef.current.value = router.query.q as string;

        setSearching(true);
        const response = await fetch(getURL(`search?q=${router.query.q}`));
        const data = await response.json();

        setResult(data);
        setSearching(false);
    }

    const hasResult = () => result != null && (result.comics.length > 0 || result.events.length > 0 || result.series.length > 0);

    useEffect(() => {
        if (router.query) {
            makeSearch();
        }

    }, [router.query]);

    return (
        <Wrapper>
            <InputWrapper>
                <SearchInput ref={inputRef} placeholder={'Search comics, events, series'} onKeyDown={onKeyDown}/>
                <SearchButton onClick={doSearch}>
                    <Icon/>
                </SearchButton>
            </InputWrapper>

            <ResultWrapper>
                {searching && <LoadingIcon/>}
                {!searching && hasResult() && (
                    <>
                        {result.comics.length > 0 && (
                            <Grid
                                data={result.comics.map(d => {
                                    return {
                                        ...d,
                                        domain: 'comics'
                                    }
                                })}
                                title={'Comics'}
                                justifyContent={'center'}
                            />
                        )}

                        {result.series.length > 0 && (
                            <Grid
                                data={result.series.map(d => {
                                    return {
                                        ...d,
                                        domain: 'series'
                                    }
                                })}
                                title={'Series'}
                                justifyContent={'center'}
                            />
                        )}

                        {result.events.length > 0 && (
                            <Grid
                                data={result.events.map(d => {
                                    return {
                                        ...d,
                                        domain: 'events'
                                    }
                                })}
                                title={'Events'}
                                justifyContent={'center'}
                            />
                        )}
                    </>
                )}
                {!searching && !hasResult() && <NoResult>Unfortunately there is no result</NoResult>}
            </ResultWrapper>
        </Wrapper>
    );
}
