import { ProjectCard } from "@/app/ui/project-card";

export default function ProjectSection() {
	return (
		<section id="projects" className="pt-20 min-h-[calc(100vh-40vh)]">
        <h1 className="drop-shadow-sm text-5xl text-primary text-center font-medium mb-8">Projects</h1>
        <div className="flex gap-4">
          <ProjectCard srcImage="/Logo.png" altImage="Logo" title="Logo" desc="Branding Logo" />
          {/* <ProjectCard /> */}
        </div>
      </section>
	)
}