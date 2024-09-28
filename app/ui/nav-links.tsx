import { NavbarItem, Link } from "@nextui-org/react";

interface NavLinksProps {
	name: string,
	path: string,
}

export const NavLinks: React.FC<NavLinksProps> = ({ name, path }) => {
	return (
		<NavbarItem>
			<Link 
				className="hover:text-primary"
				color="foreground" 
				href={ path }
			>
				{ name }
			</Link>
		</NavbarItem>
	);
}