"use client";

import React from "react";
import { Timeline } from "@/app/ui/timeline/timeline";
import { MdWork } from "react-icons/md";

export default function ExperienceSection() {
	return (
		<section id="experience" className="pt-20 min-h-[calc(100vh-40vh)]">
        	<h1 className="drop-shadow-sm text-5xl text-primary text-center font-medium mb-8">Experience</h1>
		  	<Timeline 
				items={[
					{
						time: "2024 - Present",
						place: "Associate Member of Bina Nusantara IT Division",
						desc: "Currently working in Penomoran Ijazah dan Sertifikat Nasional & Penyetaraan Ijazah Luar Negeri as Web Developer.",
						extraDesc: "Tech used:",
						logo: [
							'svg/html.svg',
							'svg/css.svg',
							'svg/bootstrap.svg',
							'svg/js.svg',
							'svg/php.svg',
							'svg/jquery.svg',
							'svg/laravel.svg',
							'svg/mysql.svg',
							'svg/git.svg',
						]
					},
				]} 
				icons={[MdWork]}
				mode="VERTICAL"
			/>
      </section>
	);
}