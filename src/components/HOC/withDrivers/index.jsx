import * as React from "react";
import { getDrivers } from "./../../../api";

const withDrivers = Component => () => {
  const [drivers, setDrivers] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const result = await getDrivers("2019");
        setDrivers(result.MRData.DriverTable.Drivers);
      } catch (e) {
        console.error("Error while retrieving drivers data");
      }
    }
    fetchData();
  }, []);
  return !!drivers.length ? <Component drivers={drivers} /> : "Loading...";
};

export default withDrivers;
