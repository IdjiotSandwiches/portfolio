import { TimelineCell } from "@/app/ui/timeline-cell";
import Timeline from '@mui/lab/Timeline';
import WorkIcon from '@mui/icons-material/Work';
import { timelineItemClasses } from '@mui/lab/TimelineItem';

export default function ExperienceTimeline() {
	return (
		<Timeline sx={{
			[`& .${timelineItemClasses.root}:before`]: {
			  flex: 0,
			  padding: 0,
			},
		 }}>
			<TimelineCell 
				time="2024 - Present"
				studyPlace="Associate Member of Bina Nusantara IT Division"
				desc="Web Developer. 
				Currently working on Penomoran Ijazah dan Sertifikat Nasional & Penyetaraan Ijazah Luar Negeri"
				icon={ <WorkIcon sx={{ fontSize: "35px" }} /> }
			/>
		</Timeline>
	);
}