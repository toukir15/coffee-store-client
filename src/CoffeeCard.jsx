import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function CoffeeCard({ coffee }) {
  const { _id, name, photo } = coffee;
  console.log(coffee);
  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire("Deleted!", "Your file has been deleted.", "success");

        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
        </div>
        <div className="btn-group btn-group-vertical">
          <button className="btn mb-4">view</button>
          <Link to={`updateCoffee/${_id}`}>
            <button className="btn mb-4">edit</button>
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn mb-4">
            delete
          </button>
        </div>
      </div>
    </div>
  );
}
