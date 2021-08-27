import BasicLayout from "components/Layout/Basic";
import {navigationListener} from "../utils/fnNavigation";
import {DataProvider} from "../providers/DataCache";

navigationListener();

function MyApp({Component, pageProps}) {
    return (
        <BasicLayout>
            <DataProvider>
                <Component {...pageProps} />
            </DataProvider>
        </BasicLayout>
    )
}

export default MyApp
