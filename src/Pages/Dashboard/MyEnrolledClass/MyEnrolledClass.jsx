import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

const MyEnrolledClass = () => {
  const [myClasses,setMyClasses] = useState([]);
  const {user} = useAuth();
  useEffect(() =>{
    fetch(`http://localhost:5000/payments?email=${user?.email}`)
    .then(res =>res.json())
    .then(data =>setMyClasses(data))
  },[])
  console.log(myClasses);
  return (
    <div className="w-full bg-gray-100 shadow-lg text-whi p-6">
      <div className="flex justify-evenly items-center mb-4">
        <h1 className="text-xl font-bold">
          My Classes : <span className="text-purple-500">{myClasses.length}</span>
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
              {
                myClasses.map((classes,index) => <tr key={classes?._id}>
                <td>{index+1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={classes?.image} alt="class image" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{classes?.itemNames}</td>
                <td>$ {classes?.price}</td>
              </tr>)
              }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrolledClass;
