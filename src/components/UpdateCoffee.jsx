import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const UpdateCoffee = () => {
  return (
    <div className="p-24">
      <Link to={"/"}>
        <button className="outline bg-purple-300 text-3xl">
          <FaHome />
        </button>
      </Link>
      <h1 className="text-6xl text-purple-600">update coffee</h1>
    </div>
  );
};

export default UpdateCoffee;
