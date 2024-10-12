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

	const webDevs = [
		"/svg/html.svg",
		"/svg/css.svg",
		"/svg/tailwind.svg",
		"/svg/bootstrap.svg",
		"/svg/js.svg",
		"/svg/jquery.svg",
		"/svg/typescript.svg",
		"/svg/react.svg",
		"/svg/php.svg",
		"/svg/laravel.svg",
		"/svg/figma.svg",
	];

	const commons = [
		"/svg/git.svg",
		"/svg/github.svg",
		"/svg/mysql.svg",
		"/svg/photoshop.svg",
	];

	return (
		<section id="skill" className="pt-20 min-h-[calc(100vh-40vh)] flex flex-col items-center">
			<h1 className="drop-shadow-sm text-5xl text-primary text-center font-medium mb-8">Skills</h1>
			<Tabs defaultValue="ai" className="w-full">
				<TabsList>
					<TabsTrigger value="ai">AI Development</TabsTrigger>
					<TabsTrigger value="web-dev">Web Development</TabsTrigger>
					<TabsTrigger value="common">Commons</TabsTrigger>
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
				<TabsContent value="web-dev" className="grid grid-cols-5 justify-items-center">
					{webDevs.map((item, index) => {
						return (
							<Content 
								imagePath={item} 
								key={index}
							/>
						);
					})}
				</TabsContent>
				<TabsContent value="common" className="grid grid-cols-5 justify-items-center">
					{commons.map((item, index) => {
						return (
							<Content 
								imagePath={item} 
								key={index}
							/>
						);
					})}
				</TabsContent>
			</Tabs>
		</section>
	);
}