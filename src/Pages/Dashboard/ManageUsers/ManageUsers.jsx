import React, { useState } from "react";
import Container from "../../../components/Shared/Container/Container";
import { useQuery } from "@tanstack/react-query";;
import Swal from "sweetalert2";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });
  console.log(users);

  const makeInstructor = (user) => {
    console.log(user._id);
    fetch(`http://localhost:5000/users/instructor/${user?._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is instructor now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const makeAdmin = (user) => {
    console.log(user._id);
    fetch(`http://localhost:5000/users/admin/${user?._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is admin now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <Container>
      <div className="mx-auto w-full">
        <h1 className="text-2xl font-bold my-4">All Users</h1>
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user.id}>
                <td className="border px-4 py-2">{user._id}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">
                  {user.role === "admin"
                    ? "Admin"
                    : user.role === "instructor"
                    ? "Instructor"
                    : ""}
                </td>
                <td className="border px-4 py-2">
                  <>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
                      onClick={() => makeInstructor(user)}
                      disabled={
                        user.role == "admin" || user.role == "instructor"
                      }
                    >
                      Make Instructor
                    </button>
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => makeAdmin(user)}
                      disabled={
                        user.role == "admin" || user.role == "instructor"
                      }
                    >
                      Make Admin
                    </button>
                  </>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default ManageUsers;