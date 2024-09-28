import { TimelineCell } from "@/app/ui/timeline-cell";

export default function Timeline() {
	return (
		<ol className="relative border-s border-gray-300 dark:border-gray-700 mb-4">
			<TimelineCell 
				time="2019 - 2022" 
				studyPlace="SMAN 19 Jakarta" 
				desc="Learned basic Photoshop in high school."
				path={[
					'svg/photoshop.svg'
				]}
			/>
			<TimelineCell 
				time="2022 - Present" 
				studyPlace="Bina Nusantara University" 
				desc="Computer Science major currently enrolled in an Artificial Intelligence course."
				path={[
					'svg/html.svg',
					'svg/css.svg',
					'svg/js.svg',
					'svg/php.svg',
					'svg/laravel.svg',
					'svg/mysql.svg',
					'svg/figma.svg',
					'svg/python.svg',
				]}
			/>
			<TimelineCell 
				time="2024 - Present" 
				studyPlace="Associate Member of Bina Nusantara IT Division" 
				desc="Working as web developer." 
				path={[
					'svg/html.svg',
					'svg/css.svg',
					'svg/js.svg',
					'svg/typescript.svg',
					'svg/react.svg',
					'svg/php.svg',
					'svg/laravel.svg',
					'svg/mysql.svg',
					'svg/jquery.svg',
					'svg/git.svg'
				]}
			/>
		</ol>
	);
}