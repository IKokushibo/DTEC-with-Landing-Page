import React, { useState } from "react";
import { FaUserCircle, FaBell } from "react-icons/fa";
import { Helmet } from "react-helmet";
import Banner from "../../Images/banner.svg";

function StatusCard({ count, title, icon, onClick, isActive }) {
  return (
    <div
      onClick={onClick}
      className={`relative ${
        isActive ? 'bg-green-900' : 'bg-green-800'
      } hover:bg-green-900 rounded-lg p-4 cursor-pointer transition-colors w-64`}
    >
      <div className="flex flex-col h-24">
        <div className="flex justify-between items-start">
          <span className="text-4xl font-bold text-white">{count}</span>
          <img src={icon} alt={title} className="w-8 h-8" />
        </div>
        <div className="mt-auto">
          <p className="text-sm uppercase text-white">{title}</p>
        </div>
      </div>
    </div>
  );
}

function StudentClearanceTracking() {
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const clearanceOffices = [
    {
      id: 1,
      officeName: "Guidance In-Charge",
      officeInCharge: "John Smith",
      dateSubmitted: "2024-01-15 09:30 AM",
      dateCompleted: "2024-01-15 02:30 PM",
      notes: "No pending items",
      status: "Approved"
    },
    {
      id: 2,
      officeName: "Director of Student Affairs",
      officeInCharge: "Maria Garcia",
      dateSubmitted: "2024-01-15 10:00 AM",
      dateCompleted: "-",
      notes: "-",
      status: "In Progress"
    },
    {
      id: 3,
      officeName: "Science Laboratory",
      officeInCharge: "Robert Wilson",
      dateSubmitted: "2024-01-15 10:15 AM",
      dateCompleted: "-",
      notes: "-",
      status: "In Progress"
    },
    {
      id: 4,
      officeName: "Computer Laboratory",
      officeInCharge: "Sarah Johnson",
      dateSubmitted: "2024-01-15 10:30 AM",
      dateCompleted: "-",
      notes: "-",
      status: "In Progress"
    },
    {
      id: 5,
      officeName: "Electronics & Circuits Laboratory",
      officeInCharge: "Michael Brown",
      dateSubmitted: "2024-01-15 10:45 AM",
      dateCompleted: "-",
      notes: "-",
      status: "In Progress"
    },
    {
      id: 6,
      officeName: "Dean",
      officeInCharge: "Emily Davis",
      dateSubmitted: "2024-01-15 11:00 AM",
      dateCompleted: "-",
      notes: "-",
      status: "In Progress"
    },
    {
      id: 7,
      officeName: "Cashier",
      officeInCharge: "David Wilson",
      dateSubmitted: "2024-01-15 11:15 AM",
      dateCompleted: "-",
      notes: "-",
      status: "In Progress"
    },
    {
      id: 8,
      officeName: "Librarian",
      officeInCharge: "Lisa Anderson",
      dateSubmitted: "2024-01-15 11:30 AM",
      dateCompleted: "-",
      notes: "-",
      status: "In Progress"
    },
    {
      id: 9,
      officeName: "School Nurse",
      officeInCharge: "James Taylor",
      dateSubmitted: "2024-01-15 11:45 AM",
      dateCompleted: "-",
      notes: "-",
      status: "In Progress"
    },
    {
      id: 10,
      officeName: "Program Head",
      officeInCharge: "Patricia Martinez",
      dateSubmitted: "2024-01-15 12:00 PM",
      dateCompleted: "-",
      notes: "-",
      status: "In Progress"
    },
    {
      id: 11,
      officeName: "HM Laboratory",
      officeInCharge: "Thomas Moore",
      dateSubmitted: "2024-01-15 12:15 PM",
      dateCompleted: "-",
      notes: "-",
      status: "In Progress"
    },
    {
      id: 12,
      officeName: "Criminology Laboratory",
      officeInCharge: "Jennifer Lee",
      dateSubmitted: "2024-01-15 12:30 PM",
      dateCompleted: "-",
      notes: "-",
      status: "In Progress"
    },
    {
      id: 13,
      officeName: "Registrar",
      officeInCharge: "William Clark",
      dateSubmitted: "2024-01-15 12:45 PM",
      dateCompleted: "-",
      notes: "-",
      status: "In Progress"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "In Progress":
        return "bg-yellow-100 text-yellow-800";
      case "For Evaluation":
        return "bg-blue-100 text-blue-800";
      case "Approved":
        return "bg-green-100 text-green-800";
      case "Declined":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <>
      <Helmet>
        <title>Student Clearance Tracking</title>
      </Helmet>

      <div className="min-h-screen bg-gray-100">
        <div className="bg-green-800 py-4 px-6 flex justify-between items-center">
          <img src={Banner} alt="Banner Logo" className="h-16" />
          <div className="flex items-center space-x-4">
            <FaBell className="text-white text-xl" />
            <FaUserCircle className="text-white text-2xl" />
          </div>
        </div>

        <div className="py-6 px-10">
          <h1 className="text-3xl font-bold text-gray-800">Welcome, Student!</h1>
          <p className="mt-2 text-gray-600">Clearance Status Tracking</p>
          <hr className="mt-4 border-gray-300" />
        </div>

        <div className="mx-10 mt-5 pb-10">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="bg-green-800 text-white p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Clearance Status</h2>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Date & Time Submitted</th>
                    <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Office Name</th>
                    <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Office In-Charge</th>
                    <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Date & Time Completed</th>
                    <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Notes</th>
                    <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {clearanceOffices.map((office) => (
                    <tr key={office.id} className="hover:bg-gray-50">
                      <td className="p-3">{office.dateSubmitted}</td>
                      <td className="p-3">{office.officeName}</td>
                      <td className="p-3">{office.officeInCharge}</td>
                      <td className="p-3">{office.dateCompleted}</td>
                      <td className="p-3">{office.notes}</td>
                      <td className="p-3">
                        <span className={`${getStatusColor(office.status)} px-2 py-1 rounded text-sm`}>
                          {office.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentClearanceTracking;