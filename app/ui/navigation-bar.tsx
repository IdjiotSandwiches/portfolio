import Link from 'next/link';
import Image from 'next/image';
import NavLinks from '@/app/ui/nav-links';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";

export default function NavigationBar() {
	return (
		<Navbar shouldHideOnScroll>
			<NavbarBrand className="flex gap-2 text-xl font-bold">
				<Image 
					src="/Logo.png"
					width={50}
					height={50}
					alt="Logo"
				/>
				Idjiot Sandwiches
			</NavbarBrand>
			<NavLinks />
		</Navbar>
	)
}