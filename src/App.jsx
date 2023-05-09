import "./App.css";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

function App() {
  const coffees = useLoaderData();
  return (
    <>
      <h1>coffees {coffees.length}</h1>
      <div className="grid grid-cols-2 gap-8">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
