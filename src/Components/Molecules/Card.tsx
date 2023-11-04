interface Props {
	title?: string;
	topRightText?: string;
}

const Card = ({ title, topRightText }: Readonly<Props>) => {
	return (
		<div className="flex flex-col relative h-32 w-64 bg-white overflow-hidden rounded-xl py-3 px-6 shadow-md">
			<div className="flex justify-between">
				<h3 className="font-semibold text-gray-700">{title}</h3>
				<p className="text-gray-500">{topRightText}</p>
			</div>
			
			<div className="absolute bottom-0 right-0 py-3 px-6 rounded-tl-xl border-t border-l
				border-gray-100 transition-shadow shadow-md hover:shadow-inner
				cursor-pointer duration-500 bg-white"><p>7🪴</p></div>
		</div>
	);
};

export default Card;