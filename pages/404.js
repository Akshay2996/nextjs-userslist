import Link from "next/link";
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
	);
};

export default NotFound;
