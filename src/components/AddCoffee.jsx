import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const suppliar = form.suppliar.value;
    const Taste = form.Taste.value;
    const catagory = form.catagory.value;
    const Details = form.Details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      suppliar,
      Taste,
      catagory,
      Details,
      photo,
    };
    form.reset();

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "user addeded successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-purple-400 p-20">
      <Link to={"/"}>
        <button className="outline bg-purple-300 text-3xl">
          <FaHome />
        </button>
      </Link>
      <h1 className="text-3xl font-extrabold">add new cofee</h1>
      <form onSubmit={handleAddCoffee}>
        <div className="w-50 ">
          {/* coffee name and quantity */}
          <div className="md:flex">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Coffee name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="info@site.com"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Available quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="quantity"
                  placeholder="Available quantity"
                  className="input input-bordered w-full ml-4"
                />
              </label>
            </div>
          </div>
          {/* form suppliar row */}
          <div className="md:flex">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">suppliar</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="suppliar"
                  placeholder="suppliar"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="Taste"
                  placeholder="Taste"
                  className="input input-bordered w-full ml-4"
                />
              </label>
            </div>
          </div>
          {/* form catagories and details row */}
          <div className="md:flex">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">catagories</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="catagory"
                  placeholder="catagories"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="Details"
                  placeholder="Details"
                  className="input input-bordered w-full ml-4"
                />
              </label>
            </div>
          </div>
          {/* photo url */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="photo"
                className="input input-bordered w-full mb-6"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Add coffee" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddCoffee;
