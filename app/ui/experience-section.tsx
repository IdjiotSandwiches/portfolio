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
					icon={ <WorkIcon sx={{ fontSize: "35px" }} /> }
					desc="Currently working in Penomoran Ijazah dan Sertifikat Nasional & Penyetaraan Ijazah Luar Negeri as Web Developer."
					extraDesc="Tech used:"
					logo={[
						'svg/html.svg',
						'svg/css.svg',
						'svg/bootstrap.svg',
						'svg/js.svg',
						'svg/php.svg',
						'svg/jquery.svg',
						'svg/laravel.svg',
						'svg/mysql.svg',
						'svg/git.svg',
					]}
				/>
			</Timeline>
      </section>
	);
}
// Blablabla