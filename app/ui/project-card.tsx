import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

interface CardProps {
	srcImage: string;
	altImage: string;
	title: string;
	desc: string;
}

export const ProjectCard: React.FC<CardProps> = ({ srcImage, altImage, title, desc }) => {
	return (
		<Card shadow="sm" className="hover:bg-gray-100" isPressable>
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
			<CardFooter className="text-small flex-col items-start">
				<h3 className="text-lg font-medium">{ title }</h3>
				<p className="text-default-500">{ desc }</p>
			</CardFooter>
	 	</Card>
	);
}