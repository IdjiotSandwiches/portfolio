"use client";

import { Timeline } from '@/app/ui/timeline/timeline';
import { FaSchool } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";

export default function EducationSection() {
	return (
		<section id="education" className="pt-20 min-h-[calc(100vh-40vh)] xl:pb-20">
        	<h1 className="drop-shadow-sm text-5xl text-primary text-center font-medium mb-8">Education Journey</h1>
			<Timeline 
				items={[
					{
						time: "2019 - 2022",
						place: "SMAN 19 Jakarta",
						desc: "As a student."
					},
					{
						time: "2022 - Present",
						place: "Bina Nusantara University",
						desc: "Computer Science major currently enrolled in an Artificial Intelligence courses."
					}
				]} 
				icons={[FaSchool, IoSchoolSharp]}
				mode="VERTICAL_ALTERNATING"
			/>
      </section>
	);
}