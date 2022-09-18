/**
 * Renders the icons linking to the company's different social network profiles.
 */
const SocialLinks = ({ socialNetworks }) => {
	return (
		<ul>
			{socialNetworks.map((network) => (
				<li key={network.id}>
					<a href={"#/"}>
						<img src={network.icon.url} alt={network.alt_text[0].text} />
					</a>
				</li>
			))}
		</ul>
	);
};

export default SocialLinks;
