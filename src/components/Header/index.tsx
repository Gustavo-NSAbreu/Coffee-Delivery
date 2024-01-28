import { ShoppingCart, MapPin } from 'phosphor-react';
import { CartContentIndicator, HeaderContainer } from './styles';
import logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { routes } from '../../config/config';

export default function Header() {
	const { totalAmount } = useContext(CartContext);

	return (
		<HeaderContainer>
			<img src={logo} />

			<nav>
				<NavLink to={routes.HOME}>
					<MapPin
						size={22}
						weight='fill'
					/>
					<p>Rio de Janeiro, RJ</p>
				</NavLink>
				<NavLink to={routes.CHECKOUT}>
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
