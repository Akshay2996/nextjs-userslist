import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div>
			<h1 className={styles.title}>HomePage</h1>
			<p className={styles.text}>
				lorem ipsum dolor sit amet, consectetur adip
			</p>
			<p className={styles.text}>lorem ipsum dolor sit amet, consectetur</p>
			<Link href="/users">
				<a className={styles.btn}>See User Listing</a>
			</Link>
		</div>
	);
}
