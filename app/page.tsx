import ExperienceSection from "@/app/ui/experience-section";
import LandingPageSection from "@/app/ui/landing-page-section";
import EducationSection from "@/app/ui/education-section";
import AboutSection from "@/app/ui/about-section";
import ProjectSection from "@/app/ui/project-card/project-section";
import Contact from "@/app/ui/contact";

export default function Home() {
  return (
    <>
      <div className="relative px-8 w-full lg:max-w-screen-lg gap-10">
        <LandingPageSection />
        <AboutSection />
        {/* <ExperienceSection /> */}
        <ProjectSection />
        {/* <EducationSection /> */}
        <Contact />
      </div>
    </>
  );
}
