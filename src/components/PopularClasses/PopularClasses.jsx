import React, { useContext, useEffect, useState } from "react";
import Container from "../../components/Shared/Container/Container";

const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/popularClasses")
      .then((res) => res.json())
      .then((data) => setPopularClasses(data));
  }, []);

  return (
    <div className="mt-8 ">
      <Container>
        <h2 className="text-3xl font-semibold mb-5 text-center">
          Popular Classes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {popularClasses?.map((classItem) => (
            <div
              key={classItem?._id}
              className={`max-w-sm rounded overflow-hidden shadow-lg m-4 ${
                classItem?.seats === 0 ? "bg-red-200" : ""
              }`}
            >
              <img
                src={classItem?.image}
                alt={classItem?.name}
                className="w-full h-48 object-cover"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{classItem.name}</div>
                <p className="text-gray-700 mb-2">
                  Instructor: {classItem?.instructor}
                </p>
                <p className="text-gray-700 mb-2">
                  Available seats: {classItem?.seats}
                </p>
                <p className="text-gray-700 mb-2">Price: ${classItem?.price}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PopularClasses;
