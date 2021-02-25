import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.push("/");
		}, 4000);
	}, []);

	return (
		<>
			<Head>
				<title>404 Page</title>
				<meta name="keywords" content="users"></meta>
			</Head>
			<div className="not-found">
				<h1>404 - Error</h1>
				<h2>Page Not Found</h2>
				<p>
					Go Back to the{" "}
					<Link href="/">
						<a>Homepage</a>
					</Link>
				</p>
			</div>
		</>
	);
};

export default NotFound;
