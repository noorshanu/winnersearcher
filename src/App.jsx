import Navbar from "./components/Navbar";
import Table from "./components/Table";

function App() {
  return (
    <>
      <div className="container-wrapper mx-auto p-4">
        <Navbar />
        <h1 className=" text-2xl sm:text-4xl text-center my-6 archo-black text-white font-bold mb-4">Zealy Sprint 1 Rewards</h1>
        <Table />
      </div>
    </>
  );
}

export default App;
