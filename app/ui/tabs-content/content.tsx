import { Image } from "@nextui-org/react";

interface ContentProps {
	imagePath: string;
}

export const Content: React.FC<ContentProps> = ({ imagePath }) => {
	return (
		<Image 
			src={imagePath}
			className="w-32 p-5"
		/>
	);
}