import { TimelineCell } from "@/app/ui/timeline-cell";
import Timeline from '@mui/lab/Timeline';
import WorkIcon from '@mui/icons-material/Work';
import { timelineItemClasses } from '@mui/lab/TimelineItem';

export default function ExperienceSection() {
	return (
		<section id="experience" className="pt-20 min-h-[calc(100vh-40vh)]">
        <h1 className="drop-shadow-sm text-5xl text-primary text-center font-medium mb-8">Experience</h1>
        <Timeline sx={{
				[`& .${timelineItemClasses.root}:before`]: {
				flex: 0,
				padding: 0,
				},
			}}>
				<TimelineCell 
					time="2024 - Present"
					studyPlace="Associate Member of Bina Nusantara IT Division"
					desc="Web Developer."
					icon={ <WorkIcon sx={{ fontSize: "35px" }} /> }
				/>
			</Timeline>
      </section>
	);
}