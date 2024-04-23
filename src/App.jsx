import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import Table2 from "./components/Table2";

function App() {
  const [selectedSprint, setSelectedSprint] = useState("sprint1");

  const handleSprintChange = (sprint) => {
    setSelectedSprint(sprint);
  };

  return (
    <>
      <div className="container-wrapper mx-auto p-4">
        <Navbar />
        <h1 className="text-2xl sm:text-4xl text-center mt-3 font-work text-white font-medium">
          Zealy Sprint  Rewards
        </h1>
        <h1 className="text-lg sm:text-2xl text-center my-3 font-work text-white font-medium mb-4">
          35,000$KIX Total Prize Fund
        </h1>
        <div className=" flex gap-2 items-center justify-center">
          <button onClick={() => handleSprintChange("sprint1")} className=" text-white font-semibold text-lg bg-[#0ea09f] rounded-full border  py-1 px-5">Sprint 1</button>
          <button onClick={() => handleSprintChange("sprint2")} className="text-white font-semibold text-lg bg-[#0ea09f] rounded-full border  py-1 px-5">Sprint 2</button>
        </div>
        {selectedSprint === "sprint1" && <Table />}
        {selectedSprint === "sprint2" && <Table2 />}
      </div>
    </>
  );
}

export default App;
