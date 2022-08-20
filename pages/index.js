import Head from "next/head";

import styles from "../styles/Home.module.css";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials/Testimonials";

import Testimonials from "../components/Testimonials/Testimonials";
// Profile pictures for slider
import AnishaLiPicture from "./../public/images/avatar-anisha.png";
import AliBravoPicture from "./../public/images/avatar-ali.png";
import RichardWattsPicture from "./../public/images/avatar-richard.png";
import ShanaiGoughPicture from "./../public/images/avatar-shanai.png";

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
		testimonialsSection: {
			heading: "What they’ve said",
			reviews: [
				{
					id: 0,
					author: {
						id: 0,
						name: "Anisha Li",
						profilePicture: AnishaLiPicture,
					},
					text: "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
				},
				{
					id: 1,
					author: {
						id: 1,
						name: "Ali Bravo",
						profilePicture: AliBravoPicture,
					},
					text: "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
				},
				{
					id: 2,
					author: {
						id: 2,
						name: "Richard Watts",
						profilePicture: RichardWattsPicture,
					},
					text: "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I tallk to!”",
				},
				{
					id: 3,
					author: {
						id: 3,
						name: "Shanai Gough",
						profilePicture: ShanaiGoughPicture,
					},
					text: "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
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

			<main>
				<Features {...data.featuresSection} />
				<Testimonials {...data.testimonialsSection} />

			</main>
		</div>
	);
}
