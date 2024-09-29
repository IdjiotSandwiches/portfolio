import * as React from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { LogoContainer } from './logo-container';
import { ReactNode } from 'react';
import { fredoka } from './fonts';

interface TimelineProps {
	time: string;
	studyPlace: string;
	desc: string;
	icon?: ReactNode;
	extraDesc?: string;
	logo?: string[];
}

export const TimelineCell: React.FC<TimelineProps> = ({ time, studyPlace, desc, icon, extraDesc, logo }) => {
  return (
	<TimelineItem>
		<TimelineSeparator>
			<TimelineConnector sx={{ bgcolor: "rgb(217 119 6)" }} />
				<TimelineDot sx={{ borderColor:"rgb(180 83 9)", color: "rgb(180 83 9)", padding: "10px" }} variant="outlined">
					{icon}
				</TimelineDot>
			<TimelineConnector sx={{ bgcolor: "rgb(217 119 6)" }} />
		</TimelineSeparator>
		<TimelineContent sx={{ py: '40px', px: 2 }}>
			<Typography className={`text-gray-400  ${fredoka.className}`}>{ time }</Typography>
			<Typography className={`font-medium text-gray-900 ${fredoka.className}`} variant="h6" component="span">
				{ studyPlace }
			</Typography>
			<Typography className={`text-gray-500 ${fredoka.className}`}>{ desc }</Typography>
			<Typography className={`font-bold text-secondary ${fredoka.className}`} variant="h6" component="span">{ extraDesc }</Typography>
			<LogoContainer path={ logo } />
		</TimelineContent>
	</TimelineItem>             
  );
}
