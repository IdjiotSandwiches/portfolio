import Image from "next/image";
import Link from "next/link";

export default function LandingPageSection() {
	return (
		<section id="/" className="pt-20 min-h-[calc(100vh-40vh)] flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-5 lg:gap-20">
         <div className="text-center lg:text-right">
            <h3 className="text-secondary text-2xl">{`Hi there!`}</h3>
            <h2 className="text-primary text-4xl font-medium">{`I'm Vincen`}</h2>
            <p className="text-gray-500 text-lg">A Computer Science major and Associate Member of the IT Division at Bina Nusantara University</p>
            <div className="flex justify-center lg:justify-end pt-4">
               <Link 
                  download="Vincen - CV"
                  href="/cv.pdf"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="rounded-lg bg-primary border-2 p-2 px-6 hover:bg-secondary text-white text-lg">
                  <p>Download CV</p>
               </Link>
            </div>
         </div>
         <Image 
            className="w-5/6 lg:w-1/2"
            src="/landing-page.png"
            alt="landing-page"
            width={1000}
            height={500}
         />
      </section>
	)
}