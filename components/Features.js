function Features({ heading, copyText, featuresList }) {
	return (
		<section className="features">
			<div className="main-copy">
				<h2>{heading}</h2>
				<p>{copyText}</p>
			</div>

			<ol className="features-list">
				{featuresList.map((feature) => (
					<li key={feature.id} className="single-feature">
						<article>
							<h3 className="feature-heading">{feature.heading}</h3>
							<p className="feature-copy">{feature.copyText}</p>
						</article>
					</li>
				))}
			</ol>
		</section>
	);
}

export default Features;
