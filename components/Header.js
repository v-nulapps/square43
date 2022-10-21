import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/component-css/Header.module.css";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { DispatchCursor, CURSOR_COLOR } from "haspr-cursor";
//All comments are for page transition delay
// import { useRouter } from "next/router";

export default function Header() {
  const dispatch = DispatchCursor();
  const [blend, setBlend] = useState(false);
  const [opened, setOpened] = useState(false);
  // const router = useRouter();

  //used for adding blend mode on scroll
  //add this to header classname
  //${blend ? styles.blend : ""}

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     window.addEventListener("scroll", () => setBlend(window.scrollY > 200));
  //   }
  // }, []);

  //Add to onClick on the element you want to delay
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.attributes.href);
  //   setTimeout(() => {
  //     router.push("/services");
  //   }, 3000);
  // };
  const openedStyle = {
    height: "100vh",
    padding: "30px 20px 40px 20px",
  };
  const closedStyle = {
    height: "0",
    padding: "0",
  };
  const handleToggle = (e) => {
    e.preventDefault();
    const element = e.currentTarget;
    element.style.pointerEvents = "none";
    e.currentTarget.classList.toggle(`${styles.opened}`);
    setOpened(!opened);
    !opened
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
    setTimeout(() => {
      element.style.pointerEvents = "auto";
    }, 600);
  };
  return (
    <div className={styles.HeaderWrap}>
      {opened ? (
        <MobileMenu style={openedStyle} />
      ) : (
        <MobileMenu style={closedStyle} />
      )}
      <div className={`${styles.Header}`}>
        <div className={`wrapper ${styles.wrapper}`}>
          <div className={styles.leftNav}>
            <Link href="/projects">
              <a
                onMouseEnter={() => CURSOR_COLOR("WHITE")}
                onMouseLeave={() => CURSOR_COLOR("END")}
                className={styles.headerLink}
              >
                Work
              </a>
            </Link>
            <Link href="/services">
              <a
                onMouseEnter={() => CURSOR_COLOR("WHITE")}
                onMouseLeave={() => CURSOR_COLOR("END")}
                className={styles.headerLink}
              >
                Services
              </a>
            </Link>
          </div>
          <Link href="/">
            <a
              onMouseEnter={() => CURSOR_COLOR("WHITE")}
              onMouseLeave={() => CURSOR_COLOR("END")}
              className={styles.logo}
            >
              <Image
                src="/logo2.svg"
                alt="square43 logo"
                width="45"
                height="45"
              />
            </a>
          </Link>
          <div className={styles.rightNav}>
            <Link href="/contact">
              <a
                onMouseEnter={() => CURSOR_COLOR("WHITE")}
                onMouseLeave={() => CURSOR_COLOR("END")}
                className={styles.headerLink}
              >
                Contact
              </a>
            </Link>

            <Link className={styles.headerLink} href="/about">
              <a
                onMouseEnter={() => CURSOR_COLOR("WHITE")}
                onMouseLeave={() => CURSOR_COLOR("END")}
                className={styles.headerLink}
              >
                About
              </a>
            </Link>
          </div>
          <div className={styles.hamNav} onClick={handleToggle}>
            <span className={`${styles.leftDotEx} ${styles.dot}`}></span>
            <span className={`${styles.leftDot} ${styles.dot}`}></span>
            <span className={`${styles.center} ${styles.dot}`}></span>
            <span className={`${styles.rightDotEx} ${styles.dot}`}></span>
            <span className={`${styles.rightDot} ${styles.dot}`}></span>
          </div>
        </div>
      </div>
    </div>
  );
}
