import Image from "next/image";

import CallToActionButton from "./CallToActionButton";

import Logo from "./../../public/images/logo.svg";
import MenuButton from "./../../public/images/icon-hamburger.svg";

function Header({ linkedPages }) {
	return (
		<header>
			<h1>
				<a href="#">
					<Image src={Logo} alt="Manage"></Image>
				</a>
			</h1>
			<button
				style={{ backgroundImage: `url(${MenuButton.src})` }}
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
