import { TimelineCell } from "@/app/ui/timeline-cell";
import Timeline from '@mui/lab/Timeline';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import SchoolIcon from '@mui/icons-material/School';

export default function EducationSection() {
	return (
		<section id="education" className="pt-20 min-h-[calc(100vh-40vh)]">
        <h1 className="drop-shadow-sm text-5xl text-primary text-center font-medium mb-8">Education Journey</h1>
        <Timeline position="alternate" className="lg:mx-32">
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