import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaUserCircle, FaBell } from "react-icons/fa";
import Banner from "../../Images/banner.svg";

function ApprovedTransaction() {
  const [transactions] = useState([
    {
      id: 1,
      type: "Clearance Request",
      requestedBy: "John Doe",
      dateApproved: "2024-11-25",
      notes: "Approved by Admin",
    },
    {
      id: 2,
      type: "Document/Letter Request",
      requestedBy: "Jane Smith",
      dateApproved: "2024-11-26",
      notes: "Reviewed and approved",
    },
  ]);

  const handleView = (transaction) => {
    alert(`Viewing details for: ${transaction.type} by ${transaction.requestedBy}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-green-800 py-4 px-6 flex justify-between items-center">
        <img src={Banner} alt="Company Logo" className="h-16" />
        <div className="flex items-center space-x-4">
          <FaBell className="text-white text-xl" />
          <FaUserCircle className="text-white text-2xl" />
        </div>
      </div>
      {/* Heading */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Approved Transactions
        </h2>
      </div>

      {/* Table */}
      <div className="p-8">
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300 bg-white shadow-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Transaction Type
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Requested By
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Date Approved
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Notes
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center text-sm font-medium text-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">
                    {transaction.type}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">
                    {transaction.requestedBy}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">
                    {transaction.dateApproved}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">
                    {transaction.notes}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center text-sm text-gray-600">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-lg"
                      onClick={() => handleView(transaction)}
                    >
                      <FaEye className="inline" /> View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ApprovedTransaction;