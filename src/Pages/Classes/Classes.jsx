import React, { useContext } from "react";
import Container from "../../components/Shared/Container/Container";
import { AuthContext } from "../../Provider/Authproviders";
import image1 from '../../assets/badminton.png';
import image2 from '../../assets/basketball.png';
import image3 from '../../assets/chess.png';
import image4 from '../../assets/cricket.png';
import image5 from '../../assets/football.png';
import image6 from '../../assets/tableTennis.png';
import image7 from '../../assets/baseball.png';
import image8 from '../../assets/golf.png';
import image9 from '../../assets/volleyball.png';

const Classes = () => {
  const {user} = useContext(AuthContext);
  const classes = [
    {
      id: 1,
      image: image1,
      name: "Badminton Fest camp",
      instructor: "John Doe",
      seats: 10,
      price: 99.99,
      approved: true,
    },
    {
      id: 2,
      image: image2,
      name: "Basketball Fest camp",
      instructor: "Jane Smith",
      seats: 5,
      price: 129.99,
      approved: true,
    },
    {
      id: 3,
      image: image3,
      name: "Chess fest camp",
      instructor: "Walter white",
      seats: 6,
      price: 129.99,
      approved: true,
    },
    {
      id: 4,
      image: image4,
      name: "Cricket fest camp",
      instructor: "Heisenberg",
      seats: 3,
      price: 129.99,
      approved: true,
    },
    {
      id: 5,
      image: image5,
      name: "Football fest camp",
      instructor: "John snow",
      seats: 2,
      price: 129.99,
      approved: true,
    },
    {
      id: 6,
      image: image6,
      name: "Tennis fest camp",
      instructor: "Berlin",
      seats: 7,
      price: 129.99,
      approved: true,
    },
    {
      id: 7,
      image: image7,
      name: "Baseball fest camp",
      instructor: "Rio",
      seats: 8,
      price: 129.99,
      approved: true,
    },
    {
      id: 8,
      image: image8,
      name: "Golf fest camp",
      instructor: "Smith",
      seats: 13,
      price: 129.99,
      approved: true,
    },
    {
      id: 9,
      image: image9,
      name: "Volleyball fest camp",
      instructor: "Rabada",
      seats: 12,
      price: 129.99,
      approved: true,
    },
  ];

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
            key={classItem.id}
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
                onClick={() => handleSelectClass(classItem.id)}
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
