"use client";

import Image from "next/image";
import React, { useState } from "react";
import { NavLinks } from "@/app/ui/navigation/nav-links";
import { NavMenuLinks } from "@/app/ui/navigation/nav-menu-links";
import { Navbar, NavbarContent, NavbarMenuToggle, NavbarMenu, Link } from "@nextui-org/react";

export default function NavigationBar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuItems = [
		{
			name: 'About',
			path: '#about',
		},
		{
			name: 'Skills',
			path: '#skill',
		},
		{
			name: 'Experience',
			path: '#experience'
		},
		{
			name: 'Projects',
			path: '#projects'
		},
		{
			name: 'Education',
			path: '#education'
		},
	];

	return (
		<Navbar 
			maxWidth="lg" 
			onMenuOpenChange={ setIsMenuOpen } 
			isBlurred={ false } 
		>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden"
					style={{
						color: 'rgb(75, 85, 99)',
					 }}
				/>
				<Link className="flex gap-2" href="#">
					<Image 
						src="/Logo.png"
						width={50}
						height={50}
						alt="Logo"
					/>		
					<p className="text-lg text-primary font-medium text-inherit">Vincen</p>
				</Link>
			</NavbarContent>
			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				{menuItems.map((item, index) => (
					<NavLinks 
						key={ `${item.name}-${index}` }
						name={ item.name } 
						path={ item.path }
					/>
				))}
			</NavbarContent>
			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavMenuLinks 
						key={`${item.name}-${index}`} 
						name={ item.name }
						path={ item.path }
					/>
				))}
			</NavbarMenu>
		</Navbar>
	)
}