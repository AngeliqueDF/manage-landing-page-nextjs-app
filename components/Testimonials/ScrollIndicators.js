const ScrollIndicators = ({ reviews, visibleTestimonial }) => (
	<div className="slider-indicators">
		{reviews.map((review, index) => {
			return (
				<div
					key={review.id}
					className={index == visibleTestimonial ? "current-slide" : ""}
				></div>
			);
		})}
	</div>
);

export default ScrollIndicators;
