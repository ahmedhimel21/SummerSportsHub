import React, { useState } from 'react';

const ManageClasses = () => {
  const [classes, setClasses] = useState([]);

  // Simulated data for demonstration
  const sampleClasses = [
    {
      id: 1,
      className: 'Yoga Class',
      instructorName: 'John Doe',
      instructorEmail: 'john@example.com',
      classImage: 'yoga.jpg',
      availableSeats: 10,
      price: 20,
      status: 'pending',
    },
    {
      id: 2,
      className: 'Pilates Class',
      instructorName: 'Jane Smith',
      instructorEmail: 'jane@example.com',
      classImage: 'pilates.jpg',
      availableSeats: 5,
      price: 15,
      status: 'pending',
    },
  ];

  const handleApprove = (classId) => {
    // Perform API call or database update to update class status to 'approved'
    const updatedClasses = classes.map((classItem) =>
      classItem.id === classId ? { ...classItem, status: 'approved' } : classItem
    );
    setClasses(updatedClasses);
  };

  const handleDeny = (classId) => {
    // Perform API call or database update to update class status to 'denied'
    const updatedClasses = classes.map((classItem) =>
      classItem.id === classId ? { ...classItem, status: 'denied' } : classItem
    );
    setClasses(updatedClasses);
  };

  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [selectedClassId, setSelectedClassId] = useState(null);
  const [feedbackText, setFeedbackText] = useState('');

  const handleOpenFeedbackModal = (classId) => {
    setSelectedClassId(classId);
    setFeedbackText('');
    setFeedbackModalOpen(true);
  };

  const handleCloseFeedbackModal = () => {
    setFeedbackModalOpen(false);
  };

  const handleSendFeedback = () => {
    // Perform API call or database update to send feedback to the instructor
    const updatedClasses = classes.map((classItem) =>
      classItem.id === selectedClassId ? { ...classItem, feedback: feedbackText } : classItem
    );
    setClasses(updatedClasses);
    setFeedbackModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
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
          {sampleClasses.map((classItem) => (
            <tr key={classItem.id}>
              <td className="px-4 py-2">
                <img src={classItem.classImage} alt={classItem.className} className="w-16 h-16" />
              </td>
              <td className="px-4 py-2">{classItem.className}</td>
              <td className="px-4 py-2">{classItem.instructorName}</td>
              <td className="px-4 py-2">{classItem.instructorEmail}</td>
              <td className="px-4 py-2">{classItem.availableSeats}</td>
              <td className="px-4 py-2">{classItem.price}</td>
              <td className="px-4 py-2">{classItem.status}</td>
              <td className="px-4 py-2">
                {classItem.status === 'pending' && (
                  <>
                    <button
                      className="bg-green-500 text-white px-2 py-1 rounded-md mr-2"
                      onClick={() => handleApprove(classItem.id)}
                    >
                      Approve
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded-md mr-2"
                      onClick={() => handleDeny(classItem.id)}
                    >
                      Deny
                    </button>
                    <button
                      className="bg-blue-500 text-white px-2 py-1 rounded-md"
                      onClick={() => handleOpenFeedbackModal(classItem.id)}
                    >
                      Send Feedback
                    </button>
                  </>
                )}
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
