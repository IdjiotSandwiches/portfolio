"use client";

import { timelineItemClasses } from '@mui/lab/TimelineItem';
import { TimelineCell } from "@/app/ui/timeline-cell";
import Timeline from '@mui/lab/Timeline';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import SchoolIcon from '@mui/icons-material/School';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/system';

export default function EducationSection() {
	const theme = useTheme();
	const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<section id="education" className="pt-20 min-h-[calc(100vh-40vh)]">
        	<h1 className="drop-shadow-sm text-5xl text-primary text-center font-medium mb-8">Education Journey</h1>
        	<Timeline 
				sx={ isLargeScreen ? {} : {
					[`& .${timelineItemClasses.root}:before`]: {
						flex: 0,
						padding: 0,
					},
				}}
				position={isLargeScreen ? "alternate" : "right"} 
				className="lg:mx-32"
			>
				<TimelineCell 
					time="2019 - 2022"
					studyPlace="SMAN 19 Jakarta"
					desc="As a student."
					icon={ <HistoryEduIcon sx={{ fontSize: "35px" }} /> }
				/>
				<TimelineCell 
					time="2022 - Present"
					studyPlace="Bina Nusantara University"
					desc="Computer Science major currently enrolled in an Artificial Intelligence course."
					icon={ <SchoolIcon sx={{ fontSize: "35px" }} /> }
				/>
			</Timeline>
      </section>
	);
}