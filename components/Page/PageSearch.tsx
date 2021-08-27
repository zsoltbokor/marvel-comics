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

    const hasResult = () => {
        if(!result) {
            return false;
        }

        let hasResult = false;

        Object.keys(result).forEach(group => {
            if(result[group]?.data?.length) {
                hasResult = true;
            }
        })

        return hasResult;
    };

    useEffect(() => {
        if (router.query) {
            makeSearch();
        }

    }, [router.query]);

    return (
        <Wrapper>
            <InputWrapper>
                <SearchInput
                    ref={inputRef}
                    placeholder={'Search comics, events, series, characters'}
                    onKeyDown={onKeyDown}
                    data-testid={'search-input'}
                />
                <SearchButton onClick={doSearch}>
                    <Icon/>
                </SearchButton>
            </InputWrapper>

            <ResultWrapper>
                {searching && <LoadingIcon/>}
                {!searching && hasResult() && (
                    <>
                        {
                            Object.keys(result).map(groupKey => {
                                if (!result[groupKey].data || !result[groupKey].data.length) {
                                    return null;
                                }

                                return (
                                    <Grid
                                        key={groupKey}
                                        data={result[groupKey].data}
                                        title={result[groupKey].title}
                                        justifyContent={'center'}
                                    />
                                )
                            })
                        }
                    </>
                )}
                {!searching && !hasResult() && router.query.q &&
                <NoResult>No results can be found in the Marvel Universe.</NoResult>}
            </ResultWrapper>
        </Wrapper>
    );
}
