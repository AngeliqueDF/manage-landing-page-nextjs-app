import { useEffect, useState } from "react";

import Image from "next/image";

import CallToActionButton from "./CallToActionButton";

import Logo from "./../../public/images/logo.svg";
import ClosedMenuButton from "./../../public/images/icon-hamburger.svg";
import OpenMenuButton from "./../../public/images/icon-close.svg";

function Header({ linkedPages }) {
	// Fix reference error, document is undefined
	const [_document, set_document] = useState(null);
	useEffect(() => {
		set_document(document);
	}, []);

	/**
	 * Tracks whether the mobile menu is open
	 */
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	function handleToggleBtnClick() {
		// toggle ".mobile-menu-open" on body
		_document.body.classList.toggle("mobile-menu-open");

		setMobileMenuOpen((prev) => {
			// toggle mobileMenuOpen to conditionally add the same class to "nav" and set the path for the toggler button's background image
			return !prev;
		});
	}

	return (
		<header>
			<h1>
				<a href="#">
					<Image src={Logo} alt="Manage"></Image>
				</a>
			</h1>
			<button
				onClick={handleToggleBtnClick}
				style={{
					backgroundImage: `url(${
						mobileMenuOpen ? OpenMenuButton.src : ClosedMenuButton.src
					})`,
				}}
				className="toggle-mobile-menu"
				title="Open mobile menu"
			></button>
			<nav>
				{linkedPages.map((page, index) => (
					<a key={page + "-" + index} href="#">
						{page}
					</a>
				))}
			</nav>

			<CallToActionButton />
		</header>
	);
}

export default Header;
