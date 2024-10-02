import { LogoContainer } from "@/app/ui/logo-container";

interface TimelineContentProps {
	items: {
		time: string;
		place: string;
		desc: string;
		extraDesc?: string;
		logo?: string[];
	}[]
}

export const TimelineContents: React.FC<TimelineContentProps> = ({ items }) => {
	return (
		<>
			{items.map((item, index) => {
				return (
					<div key={`${item.place}-${index}`} className="w-full scrollbar-hide">
						<div className="flex flex-col flex-wrap gap-4">
							<h3 className="font-normal text-gray-400">{item.time}</h3>
							<div>
								<h2 className="font-medium text-gray-900 text-xl">{item.place}</h2>
								<p className="text-gray-500">{item.desc}</p>
							</div>
							<div>
								<h4 className="font-medium text-secondary">{item.extraDesc}</h4>
								<LogoContainer path={item.logo}/>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
}