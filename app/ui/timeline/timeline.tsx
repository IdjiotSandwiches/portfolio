import React from "react";
import { Chrono } from "react-chrono";
import { IconType } from "react-icons/lib";
import { TimelineIcons } from "@/app/ui/timeline/timeline-icons";
import { TimelineContents } from "@/app/ui/timeline/timeline-contents";

interface TimelineProps {
	items: {
		time: string;
		place: string;
		desc: string;
		extraDesc?: string;
		logo?: string[];
	}[]
	mode: string;
	icons: IconType[];
}

export const Timeline: React.FC<TimelineProps> = ({ items, mode, icons }) => {
	return (
		<Chrono 
			mediaSettings={{ align: 'left'}}
			disableClickOnCircle={true}
			disableToolbar={true}
			mode={mode}
			timelinePointDimension={55}
			allowDynamicUpdate={true}
			scrollable={{ scrollbar: false }}
			cardHeight="100%"
			theme={{
				primary: "rgb(217 119 6)",
				secondary: "rgb(180 83 9)",
			}}
		>
			<TimelineIcons icons={icons} />
			<TimelineContents items={items} />
		</Chrono>
	);
}