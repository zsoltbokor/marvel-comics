import React, {FC} from "react";
import {SearchButton} from "./Search.css";

import Icon from '../../public/search.svg';
import Link from "next/link";

export const Search: FC = () => {
  return (
      <Link href={'/search'}>
          <SearchButton data-testid={'search'}>
              <Icon />
          </SearchButton>
      </Link>
  );
}
