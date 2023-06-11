import React, { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useAuth();
  const [className, setClassName] = useState("");
  const [classImage, setClassImage] = useState("");
  const [availableSeats, setAvailableSeats] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create class on the database
    const newClass = {
      className,
      classImage,
      instructorName: user?.displayName,
      instructorEmail: user?.email,
      availableSeats,
      price,
      status: "pending",
      enrolledStudents: 0,
    };

    console.log(newClass);
    fetch('http://localhost:5000/instructorsClasses',{
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(newClass)
    }).then(res => res.json()).then(data =>{
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Class added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    })

    // Reset form fields
    setClassName("");
    setClassImage("");
    setAvailableSeats("");
    setPrice("");
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Class</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label
              htmlFor="className"
              className="block text-sm font-medium mb-1"
            >
              Class name
            </label>
            <input
              type="text"
              id="className"
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="classImage"
              className="block text-sm font-medium mb-1"
            >
              Image URL
            </label>
            <input
              type="text"
              id="classImage"
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
              value={classImage}
              onChange={(e) => setClassImage(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="instructorName"
              className="block text-sm font-medium mb-1"
            >
              Instructor name
            </label>
            <input
              type="text"
              id="instructorName"
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
              value={user?.displayName}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="instructorEmail"
              className="block text-sm font-medium mb-1"
            >
              Instructor email
            </label>
            <input
              type="email"
              id="instructorEmail"
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
              value={user?.email}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="availableSeats"
              className="block text-sm font-medium mb-1"
            >
              Available seats
            </label>
            <input
              type="number"
              id="availableSeats"
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
              value={availableSeats}
              onChange={(e) => setAvailableSeats(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium mb-1">
              Price
            </label>
            <input
              type="number"
              id="price"
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Add
            </button>
          </div>
        </form>
      </div>
      {/* new code */}
    </>
  );
};

export default AddClass;
