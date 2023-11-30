"use client";
import React, { useEffect } from "react";
import styles from "@/styles/component-css/Result.module.css";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";

import { getCurrentProject } from "@/utils/data/getData";
import { usePathname } from "next/navigation";

function Result() {
  const pathname = usePathname();
  const project = getCurrentProject(pathname.split("/").pop());

  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      gsap.to(".resultText", {
        y: 0,
        opacity: 1,
        ease: "power4",
        duration: 1,
        stagger: 0.5,
      });
    }
  }, [inView]);

  return (
    <div className={styles.Result}>
      <div className="wrapper">
        <h2 className={styles.title}>Result</h2>
        <p
          ref={ref}
          className={`${styles.description} resultText`}
          dangerouslySetInnerHTML={{ __html: project.resultShort }}
        />
        <p
          className={`${styles.description} resultText`}
          dangerouslySetInnerHTML={{ __html: project.resultLong }}
        />
        {project.liveProject != "" && (
          <Link
            href={project.liveProject}
            className={`readMore ${styles.liveProject}`}
            target="_blank"
          >
            Live project
            <div className="icon">
              <Image
                src="/images/arrow.svg"
                alt="Arrow icon"
                width={40}
                height={40}
              />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Result;
