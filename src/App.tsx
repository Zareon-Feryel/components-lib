import Card from './Components/Molecules/Card.tsx';

const roomInformation = [
	{ text: '100%', icon: '😊' },
	{ text: 'Exposition', icon: '☀️️' },
];

const plantsQuantity = { text: '3', icon: '🪴' };

const temperature = { text: '22°C', icon: '🌡️' };

function App () {
	
	return (
		<div className="w-screen h-screen bg-gray-100 p-10">
			<Card title="Salon"
				  topRightText={temperature}
				  informations={roomInformation}
				  bottomRightCard={plantsQuantity}
				  functionOnClick={() => console.log('click')}
			/>
		</div>
	);
}

export default App;
