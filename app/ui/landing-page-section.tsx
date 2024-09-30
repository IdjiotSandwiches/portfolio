import Image from "next/image";

export default function LandingPageSection() {
	return (
		<section id="/" className="pt-20 min-h-[calc(100vh-40vh)] flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-5 lg:gap-20">
        <div className="text-center lg:text-right">
          <h3 className="text-secondary text-2xl">Hi there.</h3>
          <h2 className="text-primary text-3xl font-medium">I'm Vincen</h2>
          <p className="text-gray-500">A Computer Science major and Associate Member of the IT Division at Bina Nusantara University</p>
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