import { Link, useLoaderData } from "react-router-dom";
import { PiCoffeeFill } from "react-icons/pi";
import "./App.css";
import CoffeeCard from "./components/coffeeCard";

function App() {
  const coffees = useLoaderData();

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
        <Link to={"updatecoffee"}>
          <button className="outline bg-purple-300 text-3xl p-2">
            <span className="flex font-bold items-center">
              Update <PiCoffeeFill />
            </span>
          </button>
        </Link>
      </div>
      <h1 className="text-6xl text-purple-600 font-bold">
        Hot & cold coffee {coffees.length}{" "}
      </h1>

      {
        coffees.map(coffee => <CoffeeCard
        key={coffee._id}
        coffee={coffee}
        ></CoffeeCard>)
      }

    </div>
  );
}

export default App;
