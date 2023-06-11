import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageClasses = () => {
  // const [classes, setClasses] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/instructorsClasses")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setClasses(data);
  //     });
  // }, []);

  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/instructorsClasses");
    return res.data;
  });
  console.log(classes);

  const handleApprove = (classItem) => {
    console.log(classItem);
    const classesData = {
      name: classItem.className,
      status: classItem.status,
      enrolledStudents: classItem.enrolledStudents,
      feedback: classItem.feedback,
      seats: classItem.availableSeats,
      image: classItem.classImage,
      instructorEmail: classItem.instructorEmail,
      instructor: classItem.instructorName,
      price: classItem.price,
    };
    fetch(
      `http://localhost:5000/instructorsClasses/approved/${classItem?._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          fetch('http://localhost:5000/classes',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(classesData)
          }).then(res => res.json()).then(data =>{
            console.log(data);
          })
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Class has been approved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDeny = (classItem) => {
    fetch(`http://localhost:5000/instructorsClasses/denied/${classItem?._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Class has been Denied",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [selectedClassId, setSelectedClassId] = useState(null);
  const [feedbackText, setFeedbackText] = useState("");

  const handleOpenFeedbackModal = (classItem) => {
    
    setSelectedClassId(classItem?._id);
    setFeedbackText("");
    setFeedbackModalOpen(true);
  };

  const handleCloseFeedbackModal = () => {
    setFeedbackModalOpen(false);
  };

  const handleSendFeedback = () => {
    console.log(selectedClassId,feedbackText);
    const feedback = {feedbackText};
    fetch(`http://localhost:5000/instructorsClasses/feedback/${selectedClassId}`, {
      method: "PATCH",
      headers:{'content-type': 'application/json'},
      body: JSON.stringify(feedback)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "feedback has been send",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

    setFeedbackModalOpen(false);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Manage Classes</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Class Image</th>
            <th className="px-4 py-2">Class Name</th>
            <th className="px-4 py-2">Instructor Name</th>
            <th className="px-4 py-2">Instructor Email</th>
            <th className="px-4 py-2">Available Seats</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((classItem) => (
            <tr key={classItem.id}>
              <td className="px-4 py-2">
                <img
                  src={classItem.classImage}
                  alt={classItem.className}
                  className="w-16 h-16"
                />
              </td>
              <td className="px-4 py-2">{classItem.className}</td>
              <td className="px-4 py-2">{classItem.instructorName}</td>
              <td className="px-4 py-2">{classItem.instructorEmail}</td>
              <td className="px-4 py-2 text-center">
                {classItem.availableSeats}
              </td>
              <td className="px-4 py-2">{classItem.price}</td>
              <td className="px-4 py-2">{classItem.status}</td>
              <td className="px-4 py-2 inline-flex">
                {/* {classItem.status === "pending" && (
                  <>
                    
                  </>
                )} */}
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded-md mr-2"
                  onClick={() => handleApprove(classItem)}
                  disabled={
                    classItem.status == "Approved" ||
                    classItem.status == "denied"
                  }
                >
                  Approve
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded-md mr-2"
                  onClick={() => handleDeny(classItem)}
                  disabled={
                    classItem.status == "Approved" ||
                    classItem.status == "denied"
                  }
                >
                  Deny
                </button>
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded-md"
                  onClick={() => handleOpenFeedbackModal(classItem)}
                >
                  Send Feedback
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {feedbackModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-2">Send Feedback</h2>
            <textarea
              className="border border-gray-300 px-3 py-2 rounded-md w-full mb-2"
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              placeholder="Enter feedback..."
              rows={4}
            ></textarea>
            <div className="flex justify-end">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={handleSendFeedback}
              >
                Send
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                onClick={handleCloseFeedbackModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageClasses;
