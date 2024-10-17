import { Image } from "@nextui-org/react";

export default function AboutSection() {
	return (
		<section id="about" className="pt-20 min-h-[calc(100vh-40vh)] text-gray-900">
        <h1 className="drop-shadow-sm text-5xl text-primary text-center font-medium mb-8">About Me</h1>
		  <div className="flex flex-col md:flex-row items-center md:justify-between lg:mx-24 gap-4">
			<div className="flex flex-col flex-wrap gap-2 text-center md:text-left text-lg w-2/3">
				<p>
					{`I'm a Computer Science major at Bina Nusantara University, currently enrolled in an Artificial Intelligence course. I enjoy building websites, but I'm currently focused on Deep Learning and learning how to use TensorFlow. I also stay updated on state-of-the-art architectures in Artificial Intelligence.`}
				</p>
				<p className="italic text-right">
					{`"Trying to do better" -some spiderman.`}
				</p>
			</div>
			<div className="w-1/3">
				<Image 
					src="/profile-outline.png"
					alt="photos"
					className="rounded-full w-auto outline-primary outline object-cover"
				/>
			</div>
		  </div>
      </section>
	);
}
