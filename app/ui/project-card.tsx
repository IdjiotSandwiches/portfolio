import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

interface CardProps {
	srcImage: string;
	altImage: string;
	title: string;
	desc: string;
}

export const ProjectCard: React.FC<CardProps> = ({ srcImage, altImage, title, desc }) => {
	return (
	  <Card className="py-4" isPressable>
		 <CardBody className="overflow-visible py-2">
			<Image
			  alt={ altImage }
			  className="object-cover rounded-xl"
			  src={ srcImage }
			  width={250}
			/>
		 </CardBody>
		 <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
			<h3 className="text-xl font-semibold">{ title }</h3>
			<p>{ desc }</p>
		 </CardFooter>
	  </Card>
	);
}