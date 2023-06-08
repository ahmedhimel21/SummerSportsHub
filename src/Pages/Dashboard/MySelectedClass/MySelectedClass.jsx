import React from "react";
import { useCart } from "../../../hooks/useCart";

const MySelectedClass = () => {
  const [cart] = useCart();
  console.log(cart);
  const totalCost = cart.reduce(
    (sum, SelectedClass) => SelectedClass.price + sum,
    0
  );
  const cost = totalCost.toFixed(2);
  return (
    <div className="w-full bg-gray-100 shadow-lg text-whi p-6">
      <div className="flex justify-evenly items-center mb-4">
        <h1 className="text-xl font-bold">
          Selected Classes:{" "}
          <span className="text-purple-500">{cart.length}</span>
        </h1>
        <p className="text-xl font-bold">
          Total Price: <span className="text-purple-500">{cost}</span>{" "}
        </p>
        <button className="btn btn-sm btn-primary">Make payment</button>
      </div>
      {/* table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              cart.map((singleClass,index) => <tr key={singleClass._id}>
              <td>
                {index+1}
              </td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={singleClass.image}
                        alt="class image"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
               {singleClass.name}
              </td>
              <td>{singleClass.price.toFixed(2)}</td>
              <th>
                <button className="btn  btn-error btn-xs">Delete</button>
              </th>
            </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClass;
