import {FC} from "react";
import Head from 'next/head';

import {Page404} from "../components/Page/Page404";

const NotFoundPage: FC = () => {
    return (
      <>
          <Head>
              <title>400 - Page Not Found</title>
          </Head>
          <Page404 />
      </>
    );
}

export default NotFoundPage;
