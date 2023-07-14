import Header from '../../components/Header';
import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
	return (
		<div>
			<Header />
			<Outlet />
		</div>
	);
}
