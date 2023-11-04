import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	functionOnClick?: () => void;
}

const Card = ({ children, functionOnClick }: Readonly<Props>) => {
	return (
		<button onClick={() => functionOnClick?.()}
				className="flex flex-col relative h-32 w-64 bg-white overflow-hidden rounded-xl py-3 px-6 shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none transition-shadow duration-300">
			{children}
		</button>
	);
};

export default Card;