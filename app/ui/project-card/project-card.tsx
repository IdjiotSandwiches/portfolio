"use client";

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { ProjectDetail } from "@/app/ui/project-card/project-detail";
import { useDisclosure } from "@nextui-org/react";

interface CardProps {
	srcImage: string;
	altImage: string;
	title: string;
	desc: string;
	imagePath: string[];
	carouselDesc?: string;
	path?: string[];
	github: string;
}

export const ProjectCard: React.FC<CardProps> = ({ github, srcImage, altImage, title, desc, imagePath, carouselDesc, path }) => {
	const {isOpen, onOpen, onOpenChange} = useDisclosure();

	return (
		<>
			<Card shadow="sm" className="hover:bg-gray-100 text-gray-900" isPressable onClick={ onOpen }>
				<CardBody className="overflow-visible p-0">
					<Image
						shadow="sm"
						radius="lg"
						width="100%"
						alt={ altImage }
						className="w-full object-cover h-56"
						src={ srcImage }
					/>
				</CardBody>
				<CardFooter className="flex-col text-left items-start justify-start h-full">
					<h3 className="text-lg font-medium">{ title }</h3>
					<p className="text-default-500">{ desc }</p>
				</CardFooter>
			</Card>
			<ProjectDetail 
				isOpen={ isOpen } 
				onOpenChange={ onOpenChange } 
				title={ title }
				imagePath={ imagePath }
				carouselDesc={ carouselDesc }
				path={ path }
				github={ github }
			/>
		</>
	);
}