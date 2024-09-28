"use client";

import Image from 'next/image';
import React from 'react';
import { NavLinks } from '@/app/ui/nav-links';
import { NavMenuLinks } from '@/app/ui/nav-menu-links';
import { Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";

export default function NavigationBar() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const menuItems = [
		{
			name: 'About',
			path: '#about',
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
		<Navbar maxWidth="xl" onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden"
				/>
				<NavbarBrand>
					<Image 
						src="/Logo.png"
						width={50}
						height={50}
						alt="Logo"
					/>		
					<p className="font-bold text-inherit">Idjiot Sandwiches</p>
				</NavbarBrand>
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
						key={`${item}-${index}`} 
						name={ item.name }
						path={ item.path }
					/>
				))}
			</NavbarMenu>
		</Navbar>
	)
}