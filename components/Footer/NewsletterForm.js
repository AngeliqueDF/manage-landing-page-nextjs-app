/**
 * Renders the newsletter form.
 */
const NewsletterForm = ({ validEmail, validateEmail }) => {
	return (
		<div className="newsletter-form">
			<form onSubmit={validateEmail} action="POST">
				<input
					className={validEmail ? "" : "invalid-input"}
					type="text"
					placeholder="Updates in your inbox…"
				/>

				{/* Conditionally display the feedback message.  Also notify screen readers users. */}
				<div aria-live="polite">
					{validEmail ? (
						""
					) : (
						<p className="validation-feedback invalid-input">
							Please insert a valid email
						</p>
					)}
				</div>
				<input type="submit" value="Go" />
			</form>
		</div>
	);
};

export default NewsletterForm;
