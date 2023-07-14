import { ShoppingCart, MapPin } from 'phosphor-react';
import { HeaderContainer } from './styles';
import logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';

export default function Header() {
	return (
		<HeaderContainer>
      <img src={logo} />
      
			<nav>
				<NavLink to='/'>
					<MapPin
						size={22}
						weight='fill'
					/>
          <p>
            Rio de Janeiro, RJ
            {/* Porto Alegre, RS */}
          </p>
				</NavLink>
				<NavLink to='/checkout'>
					<ShoppingCart
						size={22}
						weight='fill'
					/>
				</NavLink>
			</nav>
		</HeaderContainer>
	);
}
