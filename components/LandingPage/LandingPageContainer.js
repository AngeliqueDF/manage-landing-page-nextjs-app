import LandingPage from "./LandingPage";

/**
 * Extracts data from the CMS, passes it down to presentational component.
 */
export default function LandingPageContainer({ data: cmsData }) {
	const data = {
		seo: {
			metaDescription: "",
			title: cmsData.page_title[0].text,
		},
		linkedPages: cmsData.header_links.map((link) => link.link_text[0].text),
		heroSection: {
			heading: cmsData.hero_section[0].heading[0].text,
			copyText: cmsData.hero_section[0].copy_text[0].text,
		},
		featuresSection: {
			heading: cmsData.features_section[0].heading[0].text,
			copyText: cmsData.features_section[0].copy_text[0].text,
			featuresList: cmsData.features.map((feature) => ({
				heading: feature.heading[0].text,
				copyText: feature.copy_text[0].text,
			})),
		},
		testimonialsSection: {
			heading: cmsData.testimonial_section[0].heading[0].text,
			reviews: cmsData.reviews.map((review, index) => ({
				id: index,
				...review,
			})),
		},
		callToActionSection: {
			copyText: cmsData.call_to_action_section[0].text,
		},
		footerSection: {
			socialNetworks: cmsData.social_networks,
			sitemapLinks: cmsData.sitemap_links,
		},
	};

	return <LandingPage data={data} />;
}
