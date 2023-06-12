import React, { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/payments?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setPayments(data));
  }, []);

  return (
    <div className="w-full bg-gray-100 shadow-lg text-whi p-6">
      <div className="flex justify-evenly items-center mb-4">
        <h1 className="text-xl font-bold">Payment History</h1>
      </div>
      {/* table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Amount</th>
              <th>TransactionId</th>
              <th>Customer</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment?._id}>
                <td>{index + 1}</td>
                <td>{payment?.price}</td>
                <td>{payment?.transactionId}</td>
                <td>{payment?.email}</td>
                <td>
                  {new Date(payment?.date).toLocaleString("en-US", {
                    dateStyle: "short",
                    timeStyle: "short",
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
