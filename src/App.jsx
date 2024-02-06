import Navbar from "./components/Navbar";
import Table from "./components/Table";

function App() {
  return (
    <>
      <div className="container-wrapper mx-auto p-4">
        <Navbar />
        <h1 className=" text-2xl sm:text-4xl text-center mt-3 font-work text-white font-medium ">Zealy Sprint 1 Rewards</h1>
        <h1 className=" text-lg sm:text-2xl text-center my-1 font-work text-white font-medium mb-4">35,000$KIX Total Prize Fund</h1>
        <Table />
      </div>
    </>
  );
}

export default App;
