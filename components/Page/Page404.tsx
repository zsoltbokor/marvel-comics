import {FC} from "react";
import Image from "next/image";

import {NotFoundText, Wrapper} from "./Page404.css";

export const Page404:FC = () => {
  return (
      <Wrapper>
          <Image src="/ironman.png" alt="me" width="500" height="500" />
          <NotFoundText>404<br /><br />Page does not exist!</NotFoundText>
      </Wrapper>
  );
}
