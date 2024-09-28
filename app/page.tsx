import * as React from "react";
import TimelineTest from "@/app/ui/timeline";
import { ProjectCard } from "@/app/ui/project-card";

export default function Home() {
  return (
    <div>
      <section id="about" className="min-h-screen flex items-center justify-center gap-4 mb-8">
        <div>
          <h3 className="text-gray-700 text-2xl">Hi there.</h3>
          <h2 className="text-gray-900 text-3xl font-semibold">I'm Vincen</h2>
          <p className="text-gray-500">A Computer Science major student and an Associate Member at Bina Nusantara IT Division</p>
        </div>
      </section>
      <section id="experience" className="min-h-screen mb-8">
        <h1 className="text-3xl text-primary text-center font-normal mb-4">Experience</h1>

      </section>
      <section id="projects" className="min-h-screen mb-8">
        <h1 className="text-3xl text-primary text-center font-normal mb-4">Projects</h1>
        <div className="flex gap-4">
          <ProjectCard srcImage="/Logo.png" altImage="Logo" title="Logo" desc="Branding Logo" />
          {/* <ProjectCard /> */}
        </div>
      </section>
      <section id="education" className="min-h-screen mb-8">
        <h1 className="text-3xl text-primary text-center font-normal mb-4">Education Journey</h1>
        <TimelineTest />
      </section>
      <section id="contact" className="min-h-screen mb-8">

      </section>
    </div>
  );
}
