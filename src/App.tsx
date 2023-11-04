import Card from './Components/Molecules/Card/Card.tsx';
import DisplayCard from './Components/Molecules/Card/CardContentComponent/DisplayCard/DisplayCard.tsx';

const roomInformation = [
	{ text: '100%', icon: '😊' },
	{ text: 'Exposition', icon: '☀️️' },
];

const plantsQuantity = { text: '3', icon: '🪴' };

const temperature = { text: '22°C', icon: '🌡️' };

function App () {
	
	return (
		<div className="w-screen h-screen bg-gray-100 p-10">
			<Card functionOnClick={() => alert('You clicked on the card!')}>
				<DisplayCard title="Salon"
							 topRightText={temperature}
							 informations={roomInformation}
							 bottomRightCard={plantsQuantity}/>
			</Card>
		</div>
	);
}

export default App;
