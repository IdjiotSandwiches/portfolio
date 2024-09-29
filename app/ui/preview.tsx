import Image from "next/image";

export default function Preview() {
	return (
		<div className="w-full flex justify-center md:justify-end drop-shadow-md">
			<Image 
				className="absolute w-4/6 -translate-x-14 -translate-y-12 md:-translate-x-24 md:-translate-y-36 lg:-translate-x-64 lg:-translate-y-44 rounded-md lg:w-1/2"
				src={'/ml-loans/home.png'}
				alt="ml-loans-home"
				width={400}
				height={200}
			/>
			<Image 
				className="absolute w-1/2 translate-x-20 -translate-y-8 md:translate-x-2 md:-translate-y-28 lg:translate-x-2 lg:-translate-y-36 rounded-md"
				src={'/watch-goods/home.png'}
				alt="watch-goods-home"
				width={350}
				height={200}
			/>
			<Image 
				className="absolute w-5/6 md:-translate-x-4 md:-translate-y-20 lg:-translate-x-16 lg:-translate-y-20 rounded-md lg:w-4/6"
				src={'/mini-hrms-rebuild/dashboard.png'}
				alt="mini-hrms-rebuild-dashboard"
				width={480}
				height={200}
			/>
		</div>
	);
}