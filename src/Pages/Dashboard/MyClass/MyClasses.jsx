import React, { useState, useEffect } from "react";

const MyClasses = () => {
  const [classes, setClasses] = useState([]);

  // Simulated data for demonstration
  const sampleClasses = [
    {
      id: 1,
      className: "Yoga Class",
      instructorName: "John Doe",
      status: "approved",
      enrolledStudents: 5,
      feedback: "",
    },
    {
      id: 2,
      className: "Pilates Class",
      instructorName: "John Doe",
      status: "pending",
      enrolledStudents: 0,
      feedback: "",
    },
    {
      id: 3,
      className: "Zumba Class",
      instructorName: "John Doe",
      status: "denied",
      enrolledStudents: 10,
      feedback: "Class schedule conflicts with another event.",
    },
  ];

  useEffect(() => {
    // Replace with API call or database query to fetch instructor's classes
    setClasses(sampleClasses);
  }, []);

  return (
    <>
      <div className="overflow-x-auto w-full">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="px-4 py-2">Class Name</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Total Enrolled Students</th>
              <th className="px-4 py-2">Feedback</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classItem) => (
              <tr key={classItem.id}>
                <td>{classItem.className}</td>
                <td>{classItem.status}</td>
                <td className="text-center">{classItem.enrolledStudents}</td>
                <td>{classItem.feedback}</td>
                <td>
                  {/* {classItem.status === "denied" && (
                    <button className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2">
                      Update
                    </button>
                  )} */}
              <button className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2">
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyClasses;
