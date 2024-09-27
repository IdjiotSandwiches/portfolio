import Image from "next/image";
import * as React from "react";
import NavigationBar from "@/app/ui/navigation-bar";
import { Timeline } from "@/app/ui/timeline";
import { ProjectCard } from "@/app/ui/project-card";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <div className="md:px-40">
        <section id="about" className="min-h-screen">
          <div>
            
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <ol className="relative border-s border-gray-200 dark:border-gray-700 mb-4">
              <Timeline time="2019 - 2022" studyPlace="SMAN 19 Jakarta" />
              <Timeline time="2022 - Present" studyPlace="Bina Nusantara University" />
            </ol>
          </div>
        </section>
        <section id="experience" className="min-h-screen">
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
