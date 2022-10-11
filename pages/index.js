import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Square43 Studio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main>
        <div className={styles.Home}>
          <div className={styles.wrapper}>
            <h1
              className={styles.title}
              style={{
                animation: "fadeInUp 1s forwards ease-in-out",
                opacity: 0,
              }}
            >
              Square43 Studio
            </h1>
            <div>
              <h2 className={styles.subtitle}>Shortcuts</h2>
              <Link href="/services/design/northprim">
                <a className={styles.link}>Northprim</a>
              </Link>
              <Link className={styles.link} href="/services/design/ownnew">
                <a className={styles.link}>Ownnew</a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
