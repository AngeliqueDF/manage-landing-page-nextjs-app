/**
 * Renders the footer sitemap.
 */
const Sitemap = ({ links }) => {
	return (
		<ul className="sitemap">
			{links.map((link) => (
				<li key={link.id}>
					<a href={link.url || "#/"}>{link.text_content[0].text}</a>
				</li>
			))}
		</ul>
	);
};

export default Sitemap;
