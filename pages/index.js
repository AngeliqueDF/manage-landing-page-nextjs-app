import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Header from "../components/Header";
import Hero from "../components/Hero";

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
		featuresSection: {
			heading: "What’s different about Manage?",
			copyText:
				"Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.",
			featuresList: [
				{
					id: 0,
					heading: "Track company-wide progress",
					copyText:
						"See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
				},
				{
					id: 1,
					heading: "Advanced built-in reports",
					copyText:
						"Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
				},
				{
					id: 2,
					heading: "Everything you need in one place",
					copyText:
						"Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
				},
			],
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

			<Hero {...data.heroSection} />
		</div>
	);
}
