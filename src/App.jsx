import { Link, useLoaderData } from "react-router-dom";
import { PiCoffeeFill } from "react-icons/pi";
import "./App.css";
import CoffeeCard from "./components/coffeeCard";
import { useState } from "react";

function App() {
  const loadedcoffees = useLoaderData();
  const [coffees ,setCoffees] = useState(loadedcoffees)

  return (
    <div className="p-24">
      <div>
        <Link to={"addcoffee"}>
          <button className="outline bg-purple-300 text-3xl mr-4 p-2">
            <span className="flex font-bold items-center">
              Add <PiCoffeeFill />
            </span>{" "}
          </button>
        </Link>
      </div>
      <h1 className="text-6xl text-purple-600 font-bold text-center mb-4  ">
        Hot & cold coffee <span className="outline">{coffees.length}</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-4 my-12">
      {
        coffees.map(coffee => <CoffeeCard
        key={coffee._id}
        coffee={coffee}
        coffees={coffees}
        setCoffees={setCoffees}
        ></CoffeeCard>)
      }
      </div>

    </div>
  );
}

export default App;
