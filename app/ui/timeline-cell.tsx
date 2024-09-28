"use client";

import * as React from 'react';
import { LogoContainer } from '@/app/ui/logo-container';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';

interface TimelineProps {
	time: string;
	studyPlace: string;
	desc: string;
	icon?: ReactNode;
}

export const TimelineCell: React.FC<TimelineProps> = ({ time, studyPlace, desc, icon }) => {
  return (
	<TimelineItem>
		<TimelineSeparator>
			<TimelineConnector sx={{ bgcolor: "rgb(217 119 6)" }} />
				<TimelineDot sx={{ bgcolor: "rgb(217 119 6)" }}>
					{icon}
				</TimelineDot>
			<TimelineConnector sx={{ bgcolor: "rgb(217 119 6)" }} />
		</TimelineSeparator>
		<TimelineContent sx={{ py: '40px', px: 2 }}>
			<Typography className="text-gray-400">{ time }</Typography>
			<Typography className="font-semibold text-gray-900" variant="h6" component="span">
				{ studyPlace }
			</Typography>
			<Typography className="text-gray-500">{ desc }</Typography>
		</TimelineContent>
	</TimelineItem>             
  );
}
