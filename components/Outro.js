import React, { useEffect, useState } from "react";
import styles from "../styles/component-css/Outro.module.css";
import Image from "next/image";

import { getAllProjects } from "../utils/data/getData";

import { CURSOR_COLOR } from "haspr-cursor";

function Outro(props) {
  const [project, setProject] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      let projects = getAllProjects();
      let currentId = projects.findIndex((obj) => obj.id === props.projectId);
      currentId === projects.length - 1 ? (currentId = 0) : (currentId += 1);
      setProject(projects[currentId]);
      setLoading(false);
    }, 500);
  }, [props.projectId]);

  return (
    <>
      {isLoading ? null : (
        <div className={styles.Outro}>
          <div className={`${styles.wrapper} wrapper`}>
            <video className={styles.video} autoPlay muted loop>
              <source src={project.heroVideo} type="video/mp4" />
            </video>
            <div className={styles.content}>
              <p className={styles.next}>Next project</p>
              <h2 className={styles.name}>{project.name}</h2>
              <p className={styles.slogan}>{project.slogan}</p>

              <a
                className={styles.arrowLink}
                onMouseEnter={() => CURSOR_COLOR("WHITE")}
                onMouseLeave={() => CURSOR_COLOR("END")}
                href={`/projects/${project.id}`}
              >
                <div className={styles.arrow}>
                  <Image
                    src="/images/arrow-down-solid.svg"
                    alt="arrow icon"
                    width={30}
                    height={30}
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Outro;
