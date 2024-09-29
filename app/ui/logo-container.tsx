import Image from "next/image";

interface LogoContainerProps {
	path?: string[];
}

export const LogoContainer: React.FC<LogoContainerProps> = ({ path }) => {
	return (
		<div className='flex gap-2 mt-2'>
			{path?.map((item, index) => {
				return (
					<Image 
						key={ index }
						src={ item }
						alt={ item }
						width={45}
						height={45}
					/>
				);
			})}
		</div>
	)
}