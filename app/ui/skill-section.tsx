import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
 } from "@/components/ui/tabs"

export default function SkillSection() {
	return (
		<section id="skill" className="pt-20 min-h-[calc(100vh-40vh)] flex flex-col items-center">
			<h1 className="drop-shadow-sm text-5xl text-primary text-center font-medium mb-8">Skills</h1>
			<Tabs defaultValue="ai" className="w-full">
				<TabsList>
					<TabsTrigger value="ai">AI Development</TabsTrigger>
					<TabsTrigger value="web-dev">Web Development</TabsTrigger>
				</TabsList>
				<TabsContent value="ai">

				</TabsContent>
				<TabsContent value="web-dev">
					
				</TabsContent>
			</Tabs>
		</section>
	);
}