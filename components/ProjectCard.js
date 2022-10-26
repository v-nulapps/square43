import React from "react";
import Link from "next/link";
import styles from "../styles/component-css/ProjectCard.module.css";
import Image from "next/image";

function ProjectCard(props) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.heroImage}>
        <Image
          src={props.project.heroImage}
          alt={`${props.project.name} hero`}
          fill={true}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
          className={styles.image}
        />
        <div className={styles.overlay}></div>
      </div>
      <Link href={`/projects/${props.project.id}`} className={styles.link}>
        <h2 className={styles.projectName}>{props.project.name}</h2>
        <Image
          src="/images/arrow-white-r.svg"
          alt="Arrow white right"
          width={40}
          height={40}
        />
      </Link>
    </div>
  );
}

export default ProjectCard;
