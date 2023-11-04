import { getUniqueID } from '../../../../../Helpers/uniqueId.helper.ts';
import IconWithText from '../../../../Atoms/IconWithText/IconWithText.tsx';

interface ITextWithIcon {
	text: string;
	icon: string;
}

interface Props {
	title?: string;
	topRightText?: ITextWithIcon | string;
	informations?: ITextWithIcon[];
	bottomRightCard?: ITextWithIcon;
	functionOnClick?: () => void;
}

const DisplayCard = ({ title, topRightText, informations, bottomRightCard }: Readonly<Props>) => {
	return (
		<>
			<div className="flex justify-between w-full">
				<h3 className="pl-1 font-semibold text-gray-700">{title}</h3>
				{topRightText &&
					<p className="text-gray-500">
						{typeof topRightText == 'string'
							? topRightText
							: <IconWithText icon={topRightText.icon} text={topRightText.text}/>
						}
					</p>
				}
			</div>
			<div className="flex flex-col-reverse gap-1 h-full w-full">
				{informations?.map((info, index) => (
					<IconWithText key={getUniqueID(info.text, index)} icon={info.icon} text={info.text}/>
				))}
			</div>
			
			<div className="absolute bottom-0 right-0 py-2 px-4 rounded-tl-xl border-t border-l border-gray-100 shadow-md bg-white">
				<p>{bottomRightCard?.text}
					<span className="text-xl">
						{bottomRightCard?.icon}
					</span>
				</p>
			</div>
		</>
	);
};

export default DisplayCard;