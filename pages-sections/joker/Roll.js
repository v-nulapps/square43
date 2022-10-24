import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/section-css/joker/Roll.module.css";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";

function Roll() {
  const rollingCan = useRef(null);
  const roll = useRef(null);
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView && count === 0) {
      const el = rollingCan.current;
      gsap.to(el, {
        x: 65,
        duration: 3,
        ease: "linear",
        onComplete: () => {
          gsap.to(el, {
            x: 0,
            duration: 5,
            ease: "power2",
          });
        },
      });
      const el2 = roll.current;
      gsap.to(el2, {
        rotation: 360,
        duration: 3,
        ease: "linear",
        onComplete: () => {
          gsap.to(el2, {
            rotation: 240,
            duration: 5,
            ease: "power2",
          });
        },
      });
      setCount(1);
    }
  }, [count, inView]);

  return (
    <div>
      <div className="wrapper" ref={ref}>
        <div className={styles.rollFlex}>
          <div className={styles.rollWrap}>
            <div className={styles.rollingWrap} ref={rollingCan}>
              <div className={styles.shadow}>
                <Image
                  src="/images/joker/senka.svg"
                  alt="rolling can shadow Joker Guarana"
                  width={200}
                  height={53}
                />
              </div>
              <div className={styles.can} ref={roll}>
                <Image
                  src="/images/joker/roll.webp"
                  alt="rolling can Joker Guarana"
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <div className={styles.mid}>
              <Image
                src="/images/joker/mid.webp"
                alt="mid size can Joker Guarana"
                width={390}
                height={616}
              />
            </div>
            <div className={styles.large}>
              <Image
                src="/images/joker/large.webp"
                alt="large size can Joker Guarana"
                width={517}
                height={702}
              />
            </div>
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>print layout</h2>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet non
              sollicitudin arcu integer. Nulla cras pellentesque habitant tortor
              donec bibendum volutpat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roll;