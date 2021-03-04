import Head from "next/head";
import styles from "../styles/Home.module.css";

const About = () => {
  return (
    <>
      <Head>
        <title>User List | About</title>
        <meta name="keywords" content="users"></meta>
      </Head>
      <div>
        <h1 className={styles.title}>About Me</h1>
        <h2 className={styles.subTitle}>
          Hi, I'm{" "}
          <a href="https://www.developeratease.com/" target="_blank">
            <span className={styles.name}>Akshay Sharma.</span>
          </a>{" "}
          I love Front End Development
        </h2>
        <h3 className={styles.title}>
          Visit my{" "}
          <a
            href="https://github.com/Akshay2996"
            target="_blank"
            className={styles.name}
          >
            <b>Github Page </b>
          </a>
          & Checkout my{" "}
          <a
            href="https://portfolio-akshay.netlify.app/"
            target="_blank"
            className={styles.name}
          >
            <b>Portfolio</b>
          </a>
        </h3>
        <h4add .About className={styles.title}>
          Follow me on{" "}
          <a
            href="https://twitter.com/AkshayS2909"
            target="_blank"
            className={styles.name}
          >
            Twitter
          </a>
        </h4add>
      </div>
    </>
  );
};

export default About;
