import ExperienceSection from "@/app/ui/experience-section";
import LandingPageSection from "@/app/ui/landing-page-section";
import EducationSection from "@/app/ui/education-section";
import AboutSection from "@/app/ui/about-section";
import ProjectSection from "@/app/ui/project-card/project-section";

export default function Home() {
  return (
    <div className="relative px-8 w-full xl:max-w-screen-xl gap-10">
      <LandingPageSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <EducationSection />
      <section id="contact" className="pt-20 min-h-[calc(100vh-40vh)]">

      </section>
    </div>
  );
}
