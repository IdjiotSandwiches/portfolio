import Image from "next/image";

export default function AboutSection() {
	return (
		<section id="about" className="pt-20 min-h-[calc(100vh-40vh)]">
        <h1 className="drop-shadow-sm text-5xl text-primary text-center font-medium mb-8">About Me</h1>
		  <div className="flex flex-col md:flex-row items-center md:justify-between lg:mx-24 gap-4">
			<div className="flex flex-col flex-wrap gap-2 text-center md:text-left text-lg">
				<p>
					Hi! I'm a Computer Science major at Bina Nusantara University, currently enrolled in an Artificial Intelligence course. I enjoy building websites, but I'm currently focused on Deep Learning and learning how to use TensorFlow. I also stay updated on state-of-the-art architectures in Artificial Intelligence.
				</p>
				<p className="italic">
					"Trying to do better" -some spiderman.
				</p>
			</div>
			<Image 
				src="/Logo.png"
				alt="photos"
				width={200}
				height={200}
				className="rounded-full"
			/>
		  </div>
      </section>
	);
}
