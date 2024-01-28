import CoffeeList from './components/CoffeeList';
import Title from './components/TItleSection';
import { HomeContainer } from './styles';

export default function Home() {
	return (
		<HomeContainer>
			<Title />
			<CoffeeList />
		</HomeContainer>
	);
}
