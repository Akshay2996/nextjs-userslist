import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>HomePage</h1>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <Link href="/users">
        <a>See User Listing</a>
      </Link>
      <Footer />
    </div>
  );
}
