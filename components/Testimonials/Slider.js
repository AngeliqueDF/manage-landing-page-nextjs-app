// Stateless component to render single slides
const SingleTestimonial = ({ review, testimonialIndex }) => {
	return (
		<article id={testimonialIndex}>
			<img src={review.author_profile_picture.url} />
			<h3>{review.author_name[0].text}</h3>
			<p>{`“${review.review_text[0].text}“`}</p>
		</article>
	);
};

/**
 * Displays the slider
 */
const Slider = ({ reviews, visibleTestimonial }) => {
	return (
		<div className="slider">
			{reviews.map((review, index) => (
				<SingleTestimonial
					key={review.id}
					review={review}
					testimonialIndex={index}
					visibleTestimonial={visibleTestimonial}
				/>
			))}
		</div>
	);
};

export default Slider;
