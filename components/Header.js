//import { collectAssets } from 'next/dist/build/webpack/plugins/middleware-plugin';
import React from 'react';
import classes from './Header.module.scss';
import {BiMenuAltRight} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import {useState} from "react";
import { useEffect } from "react";
import { Router, useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import {
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(true);
    const router = useRouter();
    const [size, setSize] = useState({
      width: 300,
      height: 300,
  });

  useEffect(() => {
      const handleResize = () => {
          setSize({
              width: window.innerWidth,
              height: window.innerHeight,
          });
      };
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
      if (size.width > 768 && menuOpen) {
          setMenuOpen(false);
      }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className={classes.header}> 
      <div className={classes.header__content}>
        <h2  onClick={() => router.push('/')} className={classes.header__content__logo}>ENZA</h2>

        <nav 
            className={`${classes.header__content__nav} ${menuOpen ? classes.isMenu : ""}`}
        >
            <ul>
                <li>
                  <a href="#">PageOne</a>
                </li>
                <li>
                  <a href="#">PageTwo</a>
                </li>
                <li>
                  <Link href="/login">PageThree</Link>
                </li>
                <li>
                <FontAwesomeIcon onClick={() => window.location.href = 'https://twitter.com/NzaToken'} className={classes.header__content__nav__awesome} icon={faTwitter} size="xl" />
                </li>
            </ul>
            <Link href="/login"><button> Sign in</button></Link>
        </nav>
        <div className={classes.header__content__toggle}>
            {!menuOpen ? ( 
                <BiMenuAltRight onClick={menuToggleHandler} /> 
            ) : ( 
                <AiOutlineClose onClick={menuToggleHandler} />
            )}
        </div>
      </div>
    </header>
  );
};

export default Header;
