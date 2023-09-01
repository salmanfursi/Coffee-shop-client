import { RiDeleteBinFill } from "react-icons/Ri";
import { GrEdit } from "react-icons/Gr";
import { LuView } from "react-icons/Lu";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee,coffees,setCoffees }) => {
const {_id, name, quantity, suppliar, Taste, catagory,Details,photo}= coffee ;
  const handleDelete = () => {
    event.preventDefault()
  
      Swal.fire({
            title: 'Are you sure?',
            text: "You won't to delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                  fetch(`http://localhost:5000/coffee/${_id}`,{
                        method:'DELETE'
                        }
                        )
                        .then(res => res.json())
                        .then(data => {
                          console.log(data)
                          if(data.deletedCount > 0){
                          Swal.fire(
                              'Deleted!',
                              'Your file has been deleted.',
                              'success'
                            )
                            const remaining=coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining)
                          }
                        })

            console.log("delete confiremed")
            }
          })

          
  
  };
  return (
    <div className="card card-side shadow-xl  ">
      <figure className="w-2/5 h-full">
        <img className="h-full" src={photo} alt="Movie" />
      </figure>

      <div className="flex justify-between w-full p-4">
        <div>
          <h2 className="card-title">Name:{name}</h2>
          <h1>quantity:{quantity}</h1>
          <h1>suppliar:{suppliar}</h1>
          <h1>taste:{Taste}</h1>
          <h1>category:{catagory}</h1>
          <h1>details:{Details}</h1>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical space-y-3">
            <button className="btn btn-active text-2xl">
              <LuView />
            </button>
            <Link to={`updatecoffee/${_id}`}>
      {/* updatecoffee/:id */}
            <button className="btn text-2xl">
              <GrEdit />
            </button>
            </Link>
            <button
              onClick={handleDelete}
              className="btn text-red-500 text-2xl"
            >
              <RiDeleteBinFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
