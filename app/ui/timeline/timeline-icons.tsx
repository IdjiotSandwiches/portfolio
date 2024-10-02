import { IconType } from "react-icons/lib";

interface TimelineIconsProps {
	icons: IconType[];
}

export const TimelineIcons: React.FC<TimelineIconsProps> = ({ icons }) => {
	return (
		<div className="chrono-icons">
			{icons.map((Icon, index) => {
				return (
					<div 
						key={`${Icon.name}-${index}`}
						className="border-3 border-amber-600 bg-white w-full h-full rounded-full flex justify-center items-center"
					>
						<Icon 
							size={30} 
							className="fill-amber-600"
						/>
					</div>
				);
			})}
		</div>
	);
};