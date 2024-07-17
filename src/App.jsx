import React, { useState } from "react";
import ChartComponent from "./ChartComponent";
import Summary from "./Summary";
import Tabs from "./Tabs";
import Toolbar from "./Toolbar";

 const dataValues = [
   60000, 60000, 62000, 1000, 61000, 50000, 5000, 60000, 6000, 62000, 20000, 61000, 50000,
   5000, 60000, 0, 62000, 0, 61000, 50000, 5000,61345,6785
 ];
const App = () => {
   const [val, setVal] = useState(dataValues);
   
  return (
    <div className="App">
      <header className="bg-gray-900 p-6 text-white">
        <h1 className="text-2xl">Chart UI</h1>
      </header>
      <main>
        <Summary data={val} />
        <Tabs />
        <Toolbar />
        <ChartComponent dataval={val}/>
      </main>
    </div>
  );
};

export default App;
