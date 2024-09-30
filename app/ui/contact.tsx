import Image from "next/image"
import Link from "next/link"

export default function Contact() {
	return (
		<div className="z-50 mb-8 xl:mb-0 xl:fixed flex xl:flex-col justify-center items-center gap-4 left-2 bottom-2">
			<div className="hidden xl:block border h-12 w-0 border-primary"></div>
			<div className="xl:hidden text-lg font-medium text-primary">Contact Me: </div>
			<Link 
				href="https://github.com/IdjiotSandwiches"
				rel="noopener noreferrer"
				target="_blank"
			>
				<Image 
					src="/svg/github.svg"
					alt="github"
					width={35}
					height={35}
				/>
			</Link>
			<Link 
				href="https://www.linkedin.com/in/vincen-38272a32a/"
				rel="noopener noreferrer"
				target="_blank"
			>
				<Image 
					src="/svg/linkedin.svg"
					alt="linkedin"
					width={35}
					height={35}
				/>
			</Link>
			<Link 
				href="mailto:idjiotsandwiches@gmail.com"
				rel="noopener noreferrer"
				target="_blank"
			>
				<Image 
					src="/svg/mail.svg"
					alt="linkedin"
					width={35}
					height={35}
				/>
			</Link>
			<div className="hidden xl:block border h-16 w-0 border-primary"></div>
		</div>
	)
}