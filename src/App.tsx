import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import CartContextProvider from './context/CartContext';
import CheckoutContextProvider from './context/CheckoutContext';

export default function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<CartContextProvider>
				<CheckoutContextProvider>
					<BrowserRouter>
						<Router />
						<GlobalStyle />
					</BrowserRouter>
				</CheckoutContextProvider>
			</CartContextProvider>
		</ThemeProvider>
	);
}
