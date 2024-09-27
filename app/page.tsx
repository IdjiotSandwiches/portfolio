import Image from "next/image";
import * as React from "react";
import NavigationBar from "@/app/ui/navigation-bar";
import AlternateTimeline from "@/app/ui/timeline";
import { ProjectCard } from "@/app/ui/project-card";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <div className="md:px-40">
        <section id="about" className="min-h-screen">
        </section>
        <section id="experience" className="min-h-screen">
          <AlternateTimeline />
          <div className="flex gap-4">
            <ProjectCard srcImage="/Logo.png" altImage="Logo" title="Logo" desc="Branding Logo" />
            {/* <ProjectCard /> */}
          </div>
        </section>
        <section id="contact" className="min-h-screen">

        </section>
      </div>
    </>
  );
}
