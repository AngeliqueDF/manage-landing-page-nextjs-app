/**
 * Renders the icons linking to the company's different social network profiles.
 */
const SocialLinks = ({ socialNetworks }) => {
	return (
		<ul>
			{socialNetworks.map((network) => (
				<li key={network.id}>
					<a href={network.url || "#/"}>
						<img src={network.icon.src} />
					</a>
				</li>
			))}
		</ul>
	);
};

export default SocialLinks;
