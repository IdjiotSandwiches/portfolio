import React from "react";
import EmblaCarousel from "./carousel";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import { LogoContainer } from "./logo-container";
import Link from "next/link";

interface ImageData {
	path: string;
	alt: string;
} 

interface ProjectDetailProps {
	imagePath: ImageData[];
	title: string;
	isOpen: boolean;
	onOpenChange: (isOpen: boolean) => void;
	carouselDesc?: string;
	path?: string[];
	github: string;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ github, path, imagePath, title, carouselDesc, isOpen, onOpenChange }) => {
  return (
   	<Modal
      	isOpen={isOpen}
      	onOpenChange={onOpenChange}
      	scrollBehavior="inside"
			radius="md"
			size="4xl"
			classNames={{
				body: "py-6",
				base: "border-[#292f46]",
				header: "border-b-[1px] border-gray-300",
				footer: "border-t-[1px] border-gray-300",
				closeButton: "hover:bg-white/5 active:bg-white/10",
			}}
			className="text-gray-900"
   	>
      	<ModalContent>
         	{(onClose) => (
         	<>
					<ModalHeader className="font-medium text-xl">
						{ title }
					</ModalHeader>
            	<ModalBody>	
						<EmblaCarousel slides={imagePath} />
            	</ModalBody>
					<ModalFooter className="flex-col justify-start">
						{ carouselDesc }
						<h3 className="font-medium text-primary">Tech used:</h3>
						<p>
							Github Repository: <Link href={github} className="text-primary hover:text-secondary">{ title }</Link>
						</p>
						<LogoContainer path={ path }/>
					</ModalFooter>
         	</>
         	)}
      	</ModalContent>
   	</Modal>
	);
}