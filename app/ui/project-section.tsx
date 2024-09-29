import { ProjectCard } from "@/app/ui/project-card";

export default function ProjectSection() {
	return (
		<section id="projects" className="pt-20 min-h-[calc(100vh-40vh)]">
        <h1 className="drop-shadow-sm text-5xl text-primary text-center font-medium mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProjectCard srcImage="/watch-goods/home.png" altImage="watch-goods" title="WatcHGoods" desc="Branding Logo" />
          <ProjectCard srcImage="/ml-loans/home.png" altImage="loan-credit-classification" title="Loan Credit Classification" desc="Branding Logo" />
          <ProjectCard srcImage="/mini-hrms-rebuild/dashboard.png" altImage="mini-hrms-rebuild" title="Mini HRMS Rebuild" desc="Branding Logo" />
          {/* <ProjectCard /> */}
        </div>
      </section>
	)
}