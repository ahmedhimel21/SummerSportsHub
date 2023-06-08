import React, { useContext, useEffect, useState } from "react";
import Container from "../../components/Shared/Container/Container";
import { AuthContext } from "../../Provider/Authproviders";


const Classes = () => {
  const {user} = useContext(AuthContext);
  
  const [classes,setClasses] = useState([]);

  useEffect(() =>{
    fetch('http://localhost:5000/classes')
    .then(res =>res.json())
    .then(data => setClasses(data))
  },[])
  
  const isAdminOrInstructor = true; // Example, change it based on user roles

  const handleSelectClass = (classId) => {
    if (!user) {
      alert("Please log in before selecting the course.");
      return;
    }

    // if (isAdminOrInstructor) {
    //   return;
    // }

    // Handle class selection logic
    console.log(`Selected class with ID: ${classId}`);
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
                onClick={() => handleSelectClass(classItem._id)}
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
