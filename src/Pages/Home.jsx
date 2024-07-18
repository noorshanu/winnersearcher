import React, { useState } from "react";
import Navbar from '../components/Navbar'
import Table from '../components/Table'
import Table2 from '../components/Table2'
import Table3 from "../components/Table3";

function Home() {
  const [selectedSprint, setSelectedSprint] = useState("sprint1");

  const handleSprintChange = (sprint) => {
    setSelectedSprint(sprint);
  };

  const getPrizeFundText = () => {
    switch (selectedSprint) {
      case "sprint1":
        return "35,000$KIX Total Prize Fund";
      case "sprint2":
        return "30,000$KIX Total Prize Fund ";
      case "sprint3":
        return "$1,000 USDT and 10,000$KIX Total Prize Fund";
      default:
        return "35,000$KIX Total Prize Fund";
    }
  };

  return (
    <>
      <div className="container-wrapper mx-auto p-4">
        <Navbar/>
        <div className='border-2 border-white py-8 rounded-xl mt-6'>
          <h1 className="text-2xl sm:text-4xl text-center mt-3 font-work text-white font-medium">
            Zealy Sprint Rewards
          </h1>
          <h1 className="text-lg sm:text-2xl text-center my-3 font-work text-white font-medium mb-4">
            {getPrizeFundText()}
          </h1>
          <div className="flex gap-2 items-center justify-center">
            <button 
              onClick={() => handleSprintChange("sprint1")} 
              className={`font-semibold text-lg bg-[#0ea09f] rounded-full border py-1 px-5 ${selectedSprint === "sprint1" ? 'text-[#f144f1] bg-transparent' : ''}`}
            >
              Sprint 1
            </button>
            <button 
              onClick={() => handleSprintChange("sprint2")} 
              className={` font-semibold text-lg bg-[#0ea09f] rounded-full border py-1 px-5 ${selectedSprint === "sprint2" ? 'text-[#f144f1] bg-transparent' : ''}`}
            >
              Sprint 2
            </button>

            <button 
              onClick={() => handleSprintChange("sprint3")} 
              className={` font-semibold text-lg bg-[#0ea09f] rounded-full border py-1 px-5 ${selectedSprint === "sprint3" ? 'text-[#f144f1] bg-transparent' : ''}`}
            >
              Sprint 3
            </button>
          </div>
          {selectedSprint === "sprint1" && <Table/>}
          {selectedSprint === "sprint2" && <Table2/>}
          {selectedSprint === "sprint3" && <Table3/>}
        </div>
      </div>
    </>
  );
}

export default Home;
