import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DefaultLayout from './layouts/DefaultLayout';
import Checkout from './pages/Checkout';
import Success from './pages/Success';
import { routes } from './config/config';

export default function Router() {
	return (
		<Routes>
			<Route
				path={routes.HOME}
				element={<DefaultLayout />}
			>
				<Route
					path={routes.HOME}
					element={<Home />}
				/>
				<Route
					path={routes.CHECKOUT}
					element={<Checkout />}
				/>
				<Route
					path={routes.SUCCESS}
					element={<Success />}
				/>
			</Route>
		</Routes>
	);
}
