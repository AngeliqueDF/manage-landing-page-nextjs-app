import Head from "next/head";

import styles from "./../../styles/Home.module.css";

import Header from "./../Header";
import Hero from "./../Hero";
import Features from "../Features";
import Testimonials from "./../Testimonials/Testimonials";
import CallToActionSection from "../CallToActionSection";
import Footer from "../Footer/Footer";

export default function LandingPage({ data }) {
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

				<CallToActionSection {...data.callToActionSection} />
			</main>

			<Footer {...data.footerSection} />
		</div>
	);
}
