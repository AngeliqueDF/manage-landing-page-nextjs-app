import { PrismicText, PrismicRichText } from "@prismicio/react";
import { createClient } from "../prismicio";

import LandingPageContainer from "./../components/LandingPage/LandingPageContainer";

export default function Home({ page }) {
	return <LandingPageContainer data={page.data} />;
}

export async function getStaticProps() {
	// Client used to fetch CMS content.
	const client = createClient();

	// Page document for our homepage from the CMS.
	const page = await client.getSingle("landing_page");

	// Pass the homepage as prop to our page.
	return {
		props: { page },
	};
}
