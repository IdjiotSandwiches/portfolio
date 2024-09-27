import * as React from "react";
import NavigationBar from "@/app/ui/navigation-bar";
import { Timeline } from "@/app/ui/timeline";
import { ProjectCard } from "@/app/ui/project-card";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <div className="md:px-40">
        <section id="about" className="min-h-screen flex items-center gap-4">
          <div>
            <h3 className="text-2xl">Hi there.</h3>
            <h2 className="text-3xl font-semibold">I'm Vincen</h2>
          </div>
        </section>
        <section id="education" className="min-h-screen">
          <div>
            <h3 className="text-3xl font-semibold mb-4">Education & Work Experience</h3>
            <ol className="relative border-s border-gray-200 dark:border-gray-700 mb-4">
              <Timeline 
                time="2019 - 2022" 
                studyPlace="SMAN 19 Jakarta" 
                desc="As a student"
              />
              <Timeline 
                time="2022 - Present" 
                studyPlace="Bina Nusantara University" 
                desc="As a student"
                path={[
                  'svg/html.svg',
                  'svg/css.svg',
                  'svg/js.svg',
                  'svg/php.svg',
                  'svg/laravel.svg',
                  'svg/mysql.svg',
                  'svg/figma.svg',
                  'svg/python.svg',
                ]}
              />
              <Timeline 
                time="2024 - Present" 
                studyPlace="Associate Member of Bina Nusantara IT Division" 
                desc="Working as web developer." 
                path={[
                  'svg/html.svg',
                  'svg/css.svg',
                  'svg/js.svg',
                  'svg/php.svg',
                  'svg/laravel.svg',
                  'svg/mysql.svg',
                  'svg/jquery.svg'
                ]}
              />
            </ol>
          </div>
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
    </>
  );
}
