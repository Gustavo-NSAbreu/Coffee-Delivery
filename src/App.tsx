import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import CartContextProvider from './context/CartContext';

export default function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<CartContextProvider>
				<BrowserRouter>
					<Router />
					<GlobalStyle />
				</BrowserRouter>
			</CartContextProvider>
		</ThemeProvider>
	);
}
