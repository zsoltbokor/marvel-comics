import {createContext, useContext, useState} from "react";

export const useStore = () => {
    const [store, setStore] = useState<any>(null);

    const update = (dataId: string, data: any) => {
        setStore({
            ...store,
            ...{
                [dataId]: data
            },
        });
    };

    const select = (dataId: string): any => {
        return store?.[dataId];
    };

    return {
        select,
        update,
        store
    };
};

const DataContext = createContext<ReturnType<typeof useStore>>(null);

export const DataProvider = ({children}) => {
    const store = useStore();
    return <DataContext.Provider value={store}>{children}</DataContext.Provider>;
};

export const useDataStore = () => useContext(DataContext);
