import React, { useContext, useEffect, useState } from "react";
import Container from "../../components/Shared/Container/Container";
import { AuthContext } from "../../Provider/Authproviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";


const Classes = () => {
  const {user} = useContext(AuthContext);
  const [classes,setClasses] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() =>{
    fetch('http://localhost:5000/classes')
    .then(res =>res.json())
    .then(data => setClasses(data))
  },[])
  
  const isAdminOrInstructor = true; // Example, change it based on user roles

  const handleSelectClass = (classItem) => {
    // if (!user) {
    //   alert("Please log in before selecting the course.");
    //   return;
    // }

    // if (isAdminOrInstructor) {
    //   return;
    // }

    // Handle class selection logic
    // console.log(`Selected class with ID: ${classItem}`);

    console.log(classItem)
    const {name,image,price,seats,_id} = classItem;
    if(user && user.email){
     const cartItem = {classId: _id, name,image,price,seats, email: user?.email};
     fetch('http://localhost:5000/carts',{
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(cartItem)
     }) 
     .then(res =>res.json())
     .then(data =>{
      if(data.insertedId){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
      }
     })
    }
    else{
      Swal.fire({
        title: 'Please login to enrolled class',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login first!'
      }).then((result) => {
        if (result.isConfirmed) {
         navigate('/login',{state:{from:location}})
        }
      })
    }
    
  };

  return (
    <Container>
      <div className="grid grid-cols-3">
        {classes.map((classItem) => (
          <div
            key={classItem._id}
            className={`max-w-sm rounded overflow-hidden shadow-lg m-4 ${
              classItem.seats === 0 ? "bg-red-200" : ""
            }`}
          >
            <img
              src={classItem.image}
              alt={classItem.name}
              className="w-full h-48 object-cover"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{classItem.name}</div>
              <p className="text-gray-700 mb-2">
                Instructor: {classItem.instructor}
              </p>
              <p className="text-gray-700 mb-2">
                Available seats: {classItem.seats}
              </p>
              <p className="text-gray-700 mb-2">Price: ${classItem.price}</p>
            </div>
            <div className="px-6 py-4">
              <button
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleSelectClass(classItem)}
                disabled={classItem.seats === 0 && isAdminOrInstructor===true}
              >
                {classItem.seats === 0 ? 'Sold Out' : 'Select'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Classes;
