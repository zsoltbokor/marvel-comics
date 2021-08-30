import { useRouter } from 'next/router';
import { useMemo } from 'react';

export const useLocation = () => {
    const router = useRouter();

    return useMemo(
        () => ({
            pathname: router?.asPath.split('?')[0],
            query: router?.query,
            search: router?.asPath?.split(/\?/)?.[1]?.split(/#/)?.[0],
            hash: router?.asPath?.split(/#/)?.[1],
            state: null,
        }),
        [router?.asPath]
    );
};
