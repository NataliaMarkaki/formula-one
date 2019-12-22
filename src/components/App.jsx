import * as React from 'react';
import { getDrivers } from './../api/index';

const App = () => {
	const [drivers, setDrivers] = React.useState([]);

	React.useEffect(() => {
		async function fetchData () {
			const result = await getDrivers('2019');
			setDrivers(result.MRData.DriverTable.Drivers)
		}
		fetchData();
	}, []);
	return !!drivers.length ? drivers.map(driver => driver.driverId) : 'Loading...';
}

export default App;
