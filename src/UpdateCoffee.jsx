import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

export default function UpdateCoffee() {
  const singleCoffee = useLoaderData();
  const { category, chef, details, name, photo, supplier, taste, _id } =
    singleCoffee;
  console.log(singleCoffee);
  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updateCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Wow...",
            text: "successfully update!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
          console.log(data);
        }
      });
  };
  return (
    <div>
      <h2>update coffee</h2>
      <form onSubmit={handleUpdateCoffee}>
        {/* coffee name and chef row */}
        <div className="flex gap-5 mb-8">
          <div className="form-control w-1/2">
            <label className="input-group">
              <span>Name</span>
              <input
                type="text"
                name="name"
                placeholder="Coffee Name"
                className="input input-bordered w-full"
                defaultValue={name}
              />
            </label>
          </div>
          <div className="form-control w-1/2 ">
            <label className="input-group">
              <span>Chef</span>
              <input
                type="text"
                name="chef"
                placeholder="Chef Name"
                className="input input-bordered w-full"
                defaultValue={chef}
              />
            </label>
          </div>
        </div>
        {/* coffee supplier and taste row */}
        <div className="flex gap-5 mb-8">
          <div className="form-control w-1/2">
            <label className="input-group">
              <span>Supplier</span>
              <input
                type="text"
                name="supplier"
                placeholder="Coffee Supplier"
                className="input input-bordered w-full"
                defaultValue={supplier}
              />
            </label>
          </div>
          <div className="form-control w-1/2 ">
            <label className="input-group">
              <span>Taste</span>
              <input
                type="text"
                name="taste"
                placeholder="Coffee Taste"
                className="input input-bordered w-full"
                defaultValue={taste}
              />
            </label>
          </div>
        </div>
        {/* coffee category and details row */}
        <div className="flex gap-5 mb-8">
          <div className="form-control w-1/2">
            <label className="input-group">
              <span>Category</span>
              <input
                type="text"
                name="category"
                placeholder="Coffee Category"
                className="input input-bordered w-full"
                defaultValue={category}
              />
            </label>
          </div>
          <div className="form-control w-1/2 ">
            <label className="input-group">
              <span>Details</span>
              <input
                type="text"
                name="details"
                placeholder="Coffee Details"
                className="input input-bordered w-full"
                defaultValue={details}
              />
            </label>
          </div>
        </div>
        {/* coffee photo row */}
        <div className="flex gap-5 mb-8">
          <div className="form-control w-full">
            <label className="input-group">
              <span>Photo</span>
              <input
                type="text"
                name="photo"
                placeholder="Coffee Photo"
                className="input input-bordered w-full"
                defaultValue={photo}
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Add Coffee" className="btn btn-block" />
      </form>
    </div>
  );
}
