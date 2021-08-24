import {FC} from "react";
import Link from 'next/link';
import {StyledNav} from "./Header.css";

export const Header: FC = () => {
  return (
      <StyledNav>
          <ul>
              <li>
                  <Link href={'/'}>Home</Link>
              </li>
              <li>
                  <Link href={'/series'}>Series</Link>
              </li>
              <li>
                  <Link href={'/stories'}>Stories</Link>
              </li>
              <li>
                  <Link href={'/creators'}>Creators</Link>
              </li>
          </ul>
      </StyledNav>
  );
}
