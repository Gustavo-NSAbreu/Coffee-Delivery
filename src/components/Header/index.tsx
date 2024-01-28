import { ShoppingCart, MapPin } from 'phosphor-react';
import { CartContentIndicator, HeaderContainer } from './styles';
import logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export default function Header() {
	const { totalAmount } = useContext(CartContext);

	return (
		<HeaderContainer>
			<img src={logo} />

			<nav>
				<NavLink to='/'>
					<MapPin
						size={22}
						weight='fill'
					/>
					<p>Rio de Janeiro, RJ</p>
				</NavLink>
				<NavLink to='/checkout'>
					<ShoppingCart
						size={22}
						weight='fill'
					/>
					{totalAmount ? (
						<CartContentIndicator>{totalAmount}</CartContentIndicator>
					) : null}
				</NavLink>
			</nav>
		</HeaderContainer>
	);
}
