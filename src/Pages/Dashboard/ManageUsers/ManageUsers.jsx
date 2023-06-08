import React, { useState } from 'react';
import Container from '../../../components/Shared/Container/Container';

const ManageUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', role: 'student' },
    { id: 2, name: 'Jane Smith', role: 'student' },
    // Add more users as needed
  ]);

  const makeInstructor = (userId) => {
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        return { ...user, role: 'instructor' };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  const makeAdmin = (userId) => {
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        return { ...user, role: 'admin' };
      }
      return user;
    });
    setUsers(updatedUsers);
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
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.role}</td>
              <td className="border px-4 py-2">
                  <>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
                      onClick={() => makeInstructor(user.id)}
                      disabled={user.role !== 'student'}
                    >
                      Make Instructor
                    </button>
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => makeAdmin(user.id)}
                      disabled={user.role !== 'student'}
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
