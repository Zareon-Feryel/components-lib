import { getUniqueID } from '../../Helpers/UniqueId.Helper.ts';

interface ITextWithIcon {
	text: string;
	icon: string;
}

interface Props {
	title?: string;
	topRightText?: string;
	informations?: ITextWithIcon[];
	bottomRightCard?: ITextWithIcon;
	functionOnClick?: () => void;
}

const Card = ({ title, topRightText, informations, bottomRightCard, functionOnClick }: Readonly<Props>) => {
	return (
		<button onClick={() => functionOnClick?.()}
			className="flex flex-col relative h-32 w-64 bg-white overflow-hidden rounded-xl py-3 px-6 shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none transition-shadow duration-300">
			<div className="flex justify-between w-full">
				<h3 className="font-semibold text-gray-700">{title}</h3>
				<p className="text-gray-500">{topRightText}</p>
			</div>
			<div className="flex flex-col-reverse gap-1 h-full w-full">
				{informations?.map((info, index) => (
					<div key={getUniqueID(info.text, index)} className="flex">
						<p className="text-gray-500">{info.icon}</p>
						<p className="text-gray-500">{info.text}</p>
					</div>
				))}
			</div>
			
			<div className="absolute bottom-0 right-0 py-2 px-4 rounded-tl-xl border-t border-l
				border-gray-100
				cursor-pointer duration-500 bg-white"><p>{bottomRightCard?.text} <span className="text-xl">{bottomRightCard?.icon}</span></p></div>
		</button>
	);
};

export default Card;