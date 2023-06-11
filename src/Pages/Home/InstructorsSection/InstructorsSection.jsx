import React, { useEffect, useState } from "react";
import Container from "../../../components/Shared/Container/Container";

const InstructorsSection = () => {
  const [popularInstructors, setPopularInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/instructors/popular")
      .then((res) => res.json())
      .then((data) => setPopularInstructors(data));
  }, []);
  return (
    <div className="mt-8">
      <Container>
        <section className="bg-gray-100 py-8">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-5 text-center">
              Popular Instructors
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {popularInstructors.map((Instructors) => (
                <div
                  key={Instructors._id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={Instructors.image}
                    alt={Instructors.name}
                    className="w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {Instructors.name}
                    </h3>
                    <p className="text-gray-600 line-clamp-3">
                      {Instructors.email}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default InstructorsSection;
