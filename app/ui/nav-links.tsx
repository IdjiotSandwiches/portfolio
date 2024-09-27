"use client";

import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const links = [
	{ 
		name: 'About', 
		href: '#about' 
	},
	{ 
		name: 'Experience', 
		href: '#experience' 
	},
	{ 
		name: 'Contact', 
		href: '#contact' 
	},
];

export default function NavLinks() {
	return (
		<div className="flex gap-10 font-semibold">
			{links.map((link) => {
				return (
					<Link
						key={link.name}
						href={link.href}
						className=""
					>
						<p className="hidden md:block">{link.name}</p>
					</Link>
				);
			})}
		</div>
	);
}