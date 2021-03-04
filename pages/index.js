import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>User List | Home</title>
        <meta name="keywords" content="users"></meta>
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>
          Welcome to the Basic NextJS project which uses <b>Fake Rest API</b> of
          users from{" "}
          <b>
            <a
              href="https://jsonplaceholder.typicode.com/"
              target="_blank"
              className={styles.name}
            >
              JSON Placeholder{" "}
            </a>
          </b>
          & displays the list of users.
          <p className={styles.text}>
            Click on the <b>Button</b> below or the tab on the <b>Navbar</b> to
            see the list of users.
          </p>
        </p>
        <Link href="/users">
          <a className={styles.btn}>See User Listing</a>
        </Link>
      </div>
    </>
  );
}
