import { useState, useEffect } from "react";

import Slider from "./Slider";
import ScrollIndicators from "./ScrollIndicators";
import CallToActionButton from "../CallToActionButton";

import BackgroundPatternImage from "./../../public/images/bg-tablet-pattern.svg";

function Testimonials({ heading, reviews }) {
	// Set the indicator to the first testimonial by default.
	const [visibleTestimonial, setVisibleTestimonial] = useState(0);

	// When the slider is scrolled, the component re-renders.
	// Use the IntersectionObserver API to determine the currently visible testimonial.
	useEffect(() => {
		let options = {
			root: document.querySelector(".slider"),
			rootMargin: "0px",
			threshold: 1.0,
		};
		let observer;
		const callback = (entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// If the current entry (the current article element) is 100% visible, assign its id attribute value to visibleTestimonial.
					setVisibleTestimonial(entry.target.id);
				}
			});
		};
		observer = new IntersectionObserver(callback, options);
		let targets = document.querySelectorAll(".slider article");
		targets.forEach((target) => observer.observe(target));
	});

	return (
		<section className="testimonials">
			{/* Heading with background image */}
			<img
				src={BackgroundPatternImage.src}
				id="testimonials-background"
				alt=""
			/>
			<h2>{heading}</h2>
			{/* End heading with background image */}

			{/* Display each testimonial */}
			<Slider reviews={reviews} visibleTestimonial={visibleTestimonial} />

			{/* Display scroll indicators, apply ".current-slide" to the one matching the testimonial visible */}
			<ScrollIndicators
				reviews={reviews}
				visibleTestimonial={visibleTestimonial}
			/>

			<CallToActionButton />
		</section>
	);
}

export default Testimonials;
