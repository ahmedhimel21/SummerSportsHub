import React, { useState, useEffect } from "react";
import { useAuth } from "../../../hooks/useAuth";

const MyClasses = () => {
  const [classes, setClasses] = useState([]);
  const {user} = useAuth();
  console.log(user)
  useEffect(() => {
    fetch(`http://localhost:5000/instructorClassesByEmail?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  console.log(classes);

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
              <tr key={classItem?._id}>
                <td>{classItem.className}</td>
                <td>{classItem?.status}</td>
                <td >{classItem?.enrolledStudents || 0}</td>
                <td>{classItem.feedback?.feedbackText}</td>
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
