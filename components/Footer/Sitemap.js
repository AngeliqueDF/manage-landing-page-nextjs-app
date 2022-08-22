/**
 * Renders the footer sitemap.
 */
const Sitemap = ({ links }) => {
	return (
		<ul className="sitemap">
			{links.map((link) => (
				<li key={link.id}>
					<a href={link.url || "#/"}>{link.content}</a>
				</li>
			))}
		</ul>
	);
};

export default Sitemap;
