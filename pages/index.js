import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Header from "../components/Header";

export default function Home() {
	const data = {
		seo: {
			metaDescription: "",
			title: "Manage landing page",
		},
		linkedPages: ["Pricing", "Product", "About", "Careers", "Community"],
		heroSection: {
			heading: "Bring everyone together to build better products.",
			copyText:
				"Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.",
		},
	};
	return (
		<div className={styles.container}>
			<Head>
				<title>{data.seo.title}</title>
				<meta name="description" content={data.seo.metaDescription} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header linkedPages={data.linkedPages} />

		</div>
	);
}
