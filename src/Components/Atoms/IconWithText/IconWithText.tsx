interface Props {
	icon: string;
	text: string;
}

const IconWithText = ({ icon, text }: Readonly<Props>) => {
	return (
		<div className="flex">
			<p className="text-gray-500">{icon}</p>
			<p className="text-gray-500">{text}</p>
		</div>
	);
};

export default IconWithText;