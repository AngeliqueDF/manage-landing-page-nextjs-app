// Stateless component to render single slides
const SingleTestimonial = ({ review: { author, text }, testimonialIndex }) => {
	return (
		<article id={testimonialIndex} key={author.id}>
			<img src={author.profilePicture.src} />
			<h3>{author.name}</h3>
			<p>{text}</p>
		</article>
	);
};

/**
 * Displays the slider
 */
const Slider = ({ reviews, visibleTestimonial }) => (
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

export default Slider;
