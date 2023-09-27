import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/section-css/ecom43/Hero.module.css";

import gsap from "gsap";

function Hero() {
  const main = useRef(null);
  const pointer = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      setTimeout(() => {
        const tl = gsap.timeline();
        tl.to(".border", {
          duration: 1.5,
          width: "100%",
          height: "100%",
          ease: "back.inOut(1.7)",
        })
          .to(".pointer", {
            duration: 1.5,
            top: "45%",
            right: "40%",
            ease: "power4.inOut",
          })
          .set(".subbutton", {
            background: "transparent",
          })
          .to(".subbutton", {
            duration: 0.7,
            background:
              "radial-gradient(141.42% 141.42% at 0% 0%, #7000ffff 0%, #00ffffff 100%)",
            ease: "power4.inOut",
          })
          .to(
            ".pointer",
            {
              duration: 0.3,
              scale: 0.9,
            },
            3
          )
          .to(
            ".pointer",
            {
              duration: 0.3,
              scale: 1,
            },
            3.3
          )
          .to(".pointer", {
            duration: 2,
            top: "65%",
            right: "10%",
            ease: "power4.inOut",
          });
      }, 1000);

      setTimeout(() => {
        pointer.current.addEventListener("mouseover", () => {
          pointer.current.style.transition = "1s";
          let right = Math.random() * 100;
          let top = Math.random() * 100;
          pointer.current.style.right = `${right}%`;
          pointer.current.style.top = `${top}%`;
        });
      }, 6300);
    }, main.current);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.Hero} ref={main}>
      <div className="wrapper">
        <div className={styles.wrap}>
          <h1 className={styles.heading}>
            The best <span className={styles.highlight}>custom e-com</span>{" "}
            solution on the web!
          </h1>
          <div className={styles.subWrap}>
            <p className={styles.subheading}>Powered by</p>
            <div className={`${styles.subButton} subbutton`}>
              <span>Next.js</span>
            </div>
          </div>
          <p className={styles.subtext}>
            Grow your online shop with fully customizable{" "}
            <strong>Shopify</strong> solutions.
          </p>
          <div className={styles.linkWrap}>
            <Link href="/" className="readMore">
              Get started
              <div className="icon">
                <Image
                  src="/images/arrow.svg"
                  alt="Arrow icon"
                  width={40}
                  height={40}
                />
              </div>
            </Link>
          </div>
          <div className={`${styles.border} border`}>
            <Image
              src="/images/pointer.svg"
              alt="Pointer icon"
              width={54}
              height={66}
              className={`${styles.pointer} pointer`}
              ref={pointer}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
