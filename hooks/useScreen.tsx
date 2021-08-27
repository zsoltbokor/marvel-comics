import { useEffect } from 'react';
import {useLocation} from "./useLocation";
import {useHistory} from "./useHistory";

type ScreenState = {
    [key in StoreKeys]?: any;
};

type StoreKeys = 'pageScroll' | string;

const screenState: { [key: string]: ScreenState } = {};
const locationHistory: string[] = [];

export const useScreen = () => {
    const history = useHistory();
    const location = useLocation();
    const locationKey = location?.pathname ?? 'LOCATION';

    const storeState = (key: StoreKeys, value: any, setter?: (value: any) => void) => {
        screenState[locationKey] = {
            ...screenState[locationKey],
            ...{
                [key]: {
                    value,
                    setter,
                },
            },
        };
    };

    const obtainState = (key: StoreKeys, forceKey?: string) => {
        const pageKey = forceKey || locationKey;
        return screenState?.[pageKey]?.[key] ?? null;
    };

    const emptyStates = (forceKey?: string) => {
        const pageKey = forceKey || locationKey;
        if (screenState?.[pageKey]) {
            screenState[pageKey] = {};
        }
    };

    const pop = (forceKey: string) => {
        const pageKey = forceKey || locationKey;
        const statesByLocation = screenState[pageKey];

        for (const key of Object.keys(statesByLocation)) {
            if (statesByLocation[key].setter) {
                statesByLocation[key].setter(statesByLocation?.[key]?.value);
            }
        }
    };

    useEffect(() => {
        if (locationHistory.indexOf(locationKey) === -1) {
            screenState[locationKey] = {};
            locationHistory.push(locationKey);
        }

        if (history.action === 'POP') {
            pop(locationKey);
        }
    }, [locationKey]);

    return {
        locationKey,
        locationAction: history.action,
        storeState,
        obtainState,
        emptyStates,
    };
};
