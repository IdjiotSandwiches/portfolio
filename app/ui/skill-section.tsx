import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tabs";
import { Content } from "@/app/ui/tabs-content/content";

export default function SkillSection() {
	const aiDevs = [
		"/svg/python.svg",
		"/svg/numpy.svg",
		"/svg/pandas.svg",
		"/svg/scikitlearn.svg",
		"/svg/streamlit.svg",
		"/svg/plotly.svg",
	];

	return (
		<section id="skill" className="pt-20 min-h-[calc(100vh-40vh)] flex flex-col items-center">
			<h1 className="drop-shadow-sm text-5xl text-primary text-center font-medium mb-8">Skills</h1>
			<Tabs defaultValue="ai" className="w-full">
				<TabsList>
					<TabsTrigger value="ai">AI Development</TabsTrigger>
					<TabsTrigger value="web-dev">Web Development</TabsTrigger>
				</TabsList>
				<TabsContent value="ai" className="grid grid-cols-5 justify-items-center">
					{aiDevs.map((item, index) => {
						return (
							<Content 
								imagePath={item} 
								key={index}
							/>
						);
					})}
				</TabsContent>
				<TabsContent value="web-dev" className="grid grid-cols-5">

				</TabsContent>
			</Tabs>
		</section>
	);
}