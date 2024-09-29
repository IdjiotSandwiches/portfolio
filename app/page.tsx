import * as React from "react";
import EducationTimeline from "@/app/ui/education-timeline";
import { ProjectCard } from "@/app/ui/project-card";
import ExperienceTimeline from "@/app/ui/experience-timeline";

export default function Home() {
  return (
    <div className="px-8 w-full xl:max-w-screen-xl">
      <section id="about" className="min-h-screen flex items-center justify-center gap-4 mb-8">
        <div>
          <h3 className="text-gray-700 text-2xl">Hi there.</h3>
          <h2 className="text-gray-900 text-3xl font-medium">I'm Vincen</h2>
          <p className="text-gray-500">A Computer Science major and Associate Member of the IT Division at Bina Nusantara University</p>
        </div>
      </section>
      <section id="experience" className="min-h-screen mb-8">
        <h1 className="drop-shadow-sm text-5xl text-primary text-center font-medium mb-8">Experience</h1>
        <ExperienceTimeline />
      </section>
      <section id="projects" className="min-h-screen mb-8">
        <h1 className="drop-shadow-sm text-5xl text-primary text-center font-medium mb-8">Projects</h1>
        <div className="flex gap-4">
          <ProjectCard srcImage="/Logo.png" altImage="Logo" title="Logo" desc="Branding Logo" />
          {/* <ProjectCard /> */}
        </div>
      </section>
      <section id="education" className="min-h-screen mb-8">
        <h1 className="drop-shadow-sm text-5xl text-primary text-center font-medium mb-8">Education Journey</h1>
        <EducationTimeline />
      </section>
      <section id="contact" className="min-h-screen mb-8">

      </section>
    </div>
  );
}
