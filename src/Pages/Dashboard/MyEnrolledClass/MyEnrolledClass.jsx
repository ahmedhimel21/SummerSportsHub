import React from "react";
import { Link } from "react-router-dom";

const MyEnrolledClass = () => {
  return (
    <div className="w-full bg-gray-100 shadow-lg text-whi p-6">
      <div className="flex justify-evenly items-center mb-4">
        <h1 className="text-xl font-bold">
          My Classes
        </h1>
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
            </tr>
          </thead>
          <tbody>
              <tr key={''}>
                <td>{''}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={''} alt="class image" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{}</td>
                <td>{}</td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrolledClass;
