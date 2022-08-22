import { useState } from "react";

import SocialLinks from "./SocialLinks";
import Sitemap from "./Sitemap";
import NewsletterForm from "./NewsletterForm";

import FooterLogo from "./../../public/images/logo-white.svg";

function Footer({ socialNetworks, sitemapLinks }) {
	// Tracks whether the email entered is valid. Defaults to true to avoid displaying the feedback.
	const [validEmail, setvalidEmail] = useState(true);

	// Regex to validate the email address entered.
	const EMAIL_REGEX = new RegExp(
		"([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
	);

	function handleSubmit(event) {
		event.preventDefault();

		if (EMAIL_REGEX.test(event.target.value)) {
			setvalidEmail(true);
		} else {
			console.log("invalid mail");
			setvalidEmail(false);
		}
	}

	return (
		<footer>
			<div className="social-links">
				<a href="#/">
					<img src={FooterLogo.src} alt="Manage app" />
				</a>
				<SocialLinks socialNetworks={socialNetworks} />
			</div>

			<Sitemap links={sitemapLinks} />
			<NewsletterForm validEmail={validEmail} validateEmail={handleSubmit} />

			<small className="copyright">Copyright 2020. All Rights Reserved</small>
			<div className="attribution">
				<small>
					Challenge by
					<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
						Frontend Mentor
					</a>
					. Coded by <a href="https://adf.dev">Angélique D. Faye</a>.
				</small>
			</div>
		</footer>
	);
}

export default Footer;
