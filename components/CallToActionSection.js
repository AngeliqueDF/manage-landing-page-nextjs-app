import CallToActionButton from "./CallToActionButton";

function CallToActionSection({ copyText }) {
	return (
		<div className="cta-section">
			<p>{copyText}</p>
			<CallToActionButton />
		</div>
	);
}

export default CallToActionSection;
