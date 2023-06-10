import React, { useEffect, useState } from "react";
import Container from "../../components/Shared/Container/Container";

const Instructors = () => {
  const [instructors,setInstructors] = useState([]);

  useEffect(() =>{
    fetch('http://localhost:5000/instructors')
    .then(res =>res.json())
    .then(data => setInstructors(data))
  },[])
  console.log(instructors);
  return (
    <Container>
      <div className=" mt-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="flex flex-col items-center">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="rounded-full w-32 h-32 object-cover"
              />
              <h2 className="text-lg font-semibold mt-4">{instructor.name}</h2>
              <p className="text-gray-600">{instructor.email}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Instructors;
