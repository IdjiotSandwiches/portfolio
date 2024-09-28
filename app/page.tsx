import * as React from "react";
import TimelineTest from "@/app/ui/timeline";
import { ProjectCard } from "@/app/ui/project-card";

export default function Home() {
  return (
    <div>
      <section id="about" className="min-h-screen flex items-center gap-4">
        <div>
          <h3 className="text-2xl">Hi there.</h3>
          <h2 className="text-3xl font-semibold">I'm Vincen</h2>
        </div>
      </section>
      <section id="education" className="min-h-screen">
        <h1 className="text-3xl text-center font-semibold mb-4">Education Journey</h1>
        <TimelineTest />
      </section>
      <section id="experience" className="min-h-screen">
        <h1 className="text-3xl font-semibold mb-4">Project Experience</h1>
        <div className="flex gap-4">
          <ProjectCard srcImage="/Logo.png" altImage="Logo" title="Logo" desc="Branding Logo" />
          {/* <ProjectCard /> */}
        </div>
      </section>
      <section id="contact" className="min-h-screen">

      </section>
    </div>
  );
}
