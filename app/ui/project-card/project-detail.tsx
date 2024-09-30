import React from "react";
import { Carousel } from "@/app/ui/project-card/carousel";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import { LogoContainer } from "@/app/ui/logo-container";
import Link from "next/link";

interface ProjectDetailProps {
	imagePath: string[];
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
			size="5xl"
			classNames={{
				body: "py-4 border-t-[1px] border-gray-300",
				base: "border-[#292f46]",
				footer: "border-t-[1px] border-gray-300",
				closeButton: "hover:bg-white/5 active:bg-white/10",
			}}
			className="text-gray-900"
   	>
      	<ModalContent>
         	{() => (
         	<>
					<ModalHeader className="font-medium text-xl">
						{ title }
					</ModalHeader>
            	<ModalBody className="scrollbar-hide flex justify-center items-center">	
						<Carousel slides={imagePath} />
            	</ModalBody>
					<ModalBody className="flex-col justify-start">
						{ carouselDesc }
						<p className="font-medium">
							Github Repository: <Link 
									href={github} 
									rel="noopener noreferrer"
									target="_blank"
									className="text-primary hover:text-secondary underline"
								>
									{ title }
								</Link>
						</p>
						<h3 className="font-medium text-primary">Tech used:</h3>
						<LogoContainer path={ path }/>
					</ModalBody>
         	</>
         	)}
      	</ModalContent>
   	</Modal>
	);
}