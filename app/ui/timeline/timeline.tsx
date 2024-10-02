import React from "react";
import { IconType } from "react-icons/lib";
import { LogoContainer } from "@/app/ui/logo/logo-container";
import dynamic from "next/dynamic";

const Chrono = dynamic(() => import('react-chrono').then((mode) => mode.Chrono), { ssr: false });

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
		</Chrono>
	);
}