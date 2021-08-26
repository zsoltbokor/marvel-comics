import BasicLayout from "components/Layout/Basic";
import {navigationListener} from "../utils/fnNavigation";

navigationListener();

function MyApp({Component, pageProps}) {
    return (
        <BasicLayout>
            <Component {...pageProps} />
        </BasicLayout>
    )
}

export default MyApp
