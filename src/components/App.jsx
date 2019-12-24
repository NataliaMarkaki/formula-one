import * as React from "react";
import Table from "./Table";
import withDrivers from "./HOC/withDrivers";

const App = () => {
  const DriversTable = withDrivers(Table);
  return <DriversTable />;
};

export default App;
