import HeroIllustration from "./../public/images/illustration-intro.svg";

import CallToActionButton from "./CallToActionButton";

function Hero({ heading, copyText }) {
	return (
		<section className="hero">
			<div className="copy">
				<h2>{heading}</h2>
				<p>{copyText}</p>

				<CallToActionButton />
			</div>
			<img className="hero-illustration" src={HeroIllustration.src} />
		</section>
	);
}

export default Hero;
