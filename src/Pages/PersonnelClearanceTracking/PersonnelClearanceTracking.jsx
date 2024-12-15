import React, { useState } from "react";
import { FaUserCircle, FaBell } from "react-icons/fa";
import { Helmet } from "react-helmet";
import Banner from "../../Images/banner.svg";
import PendingIcon from "../../Images/pending.png";
import ApprovedIcon from "../../Images/approved.png";

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

function PersonnelClearanceTracking() {
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedApplicationStatus, setSelectedApplicationStatus] = useState("SELECT ALL");

  // Predefined clearance offices with initial status
  const clearanceOffices = [
    {
      id: 1,
      officeName: "Library/Multimedia",
      officeInCharge: "John Smith",
      dateTime: "2024-01-15 09:30 AM",
      notes: "No pending items",
      status: "In Progress"
    },
    {
      id: 2,
      officeName: "Science Laboratory",
      officeInCharge: "Maria Garcia",
      dateTime: "-",
      notes: "-",
      status: "In Progress"
    },
    {
      id: 3,
      officeName: "Criminology Laboratory",
      officeInCharge: "Robert Wilson",
      dateTime: "-",
      notes: "-",
      status: "In Progress"
    },
    {
      id: 4,
      officeName: "Computer Laboratory",
      officeInCharge: "Sarah Johnson",
      dateTime: "-",
      notes: "-",
      status: "In Progress"
    },
    {
      id: 5,
      officeName: "HRM Department",
      officeInCharge: "Michael Brown",
      dateTime: "-",
      notes: "-",
      status: "In Progress"
    },
    {
      id: 6,
      officeName: "Nursing Department",
      officeInCharge: "Emily Davis",
      dateTime: "-",
      notes: "-",
      status: "In Progress"
    },
    {
      id: 7,
      officeName: "Cashier",
      officeInCharge: "David Wilson",
      dateTime: "-",
      notes: "-",
      status: "In Progress"
    },
    {
      id: 8,
      officeName: "Registrar",
      officeInCharge: "Lisa Anderson",
      dateTime: "-",
      notes: "-",
      status: "In Progress"
    },
    {
      id: 9,
      officeName: "Accounting",
      officeInCharge: "James Taylor",
      dateTime: "-",
      notes: "-",
      status: "In Progress"
    },
    {
      id: 10,
      officeName: "Property Custodian",
      officeInCharge: "Patricia Martinez",
      dateTime: "-",
      notes: "-",
      status: "In Progress"
    },
    {
      id: 11,
      officeName: "Program Head",
      officeInCharge: "Thomas Moore",
      dateTime: "-",
      notes: "-",
      status: "In Progress"
    },
    {
      id: 12,
      officeName: "Dean",
      officeInCharge: "Jennifer Lee",
      dateTime: "-",
      notes: "-",
      status: "In Progress"
    },
    {
      id: 13,
      officeName: "VPAF",
      officeInCharge: "William Clark",
      dateTime: "-",
      notes: "-",
      status: "In Progress"
    },
    {
      id: 14,
      officeName: "VPA",
      officeInCharge: "Elizabeth White",
      dateTime: "-",
      notes: "-",
      status: "In Progress"
    },
    {
      id: 15,
      officeName: "President",
      officeInCharge: "Richard Brown",
      dateTime: "-",
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

  const filteredOffices = clearanceOffices.filter((office) => {
    const matchesStatus = selectedStatus ? office.status === selectedStatus : true;
    const matchesSearch = searchTerm === "" || 
      office.officeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      office.officeInCharge.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesApplicationStatus = selectedApplicationStatus === "SELECT ALL" ? true : 
      office.status === selectedApplicationStatus;

    return matchesStatus && matchesSearch && matchesApplicationStatus;
  });

  const forEvaluationCount = clearanceOffices.filter(t => t.status === "For Evaluation").length;
  const approvedCount = clearanceOffices.filter(t => t.status === "Approved").length;

  const handleCardClick = (status) => {
    setSelectedStatus(status === selectedStatus ? null : status);
    setSelectedApplicationStatus("SELECT ALL");
  };

  return (
    <>
      <Helmet>
        <title>Faculty Clearance Tracking</title>
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
          <h1 className="text-3xl font-bold text-gray-800">Welcome, Faculty!</h1>
          <p className="mt-2 text-gray-600">Clearance Status Tracking</p>
          <hr className="mt-4 border-gray-300" />
        </div>

        <div className="px-10 flex justify-between items-start">
          <div className="flex space-x-4">
            <StatusCard
              count={forEvaluationCount}
              title="FOR EVALUATION"
              icon={PendingIcon}
              onClick={() => handleCardClick("For Evaluation")}
              isActive={selectedStatus === "For Evaluation"}
            />
            <StatusCard
              count={approvedCount}
              title="APPROVED"
              icon={ApprovedIcon}
              onClick={() => handleCardClick("Approved")}
              isActive={selectedStatus === "Approved"}
            />
          </div>

          <div className="flex space-x-4">
            <div className="relative">
              <label className="block text-xs text-gray-500 mb-1">Application Status</label>
              <select 
                className="appearance-none bg-white border border-gray-300 rounded-md py-2 px-4 pr-8 w-48 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={selectedApplicationStatus}
                onChange={(e) => {
                  setSelectedApplicationStatus(e.target.value);
                  setSelectedStatus(null);
                }}
              >
                <option>SELECT ALL</option>
                <option>In Progress</option>
                <option>For Evaluation</option>
                <option>Approved</option>
                <option>Declined</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 mt-6">
                <svg className="fill-current h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-10 mt-10">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="bg-green-800 text-white p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Clearance Status</h2>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <span className="text-sm mr-2">Show</span>
                    <select 
                      className="bg-white text-gray-800 rounded px-2 py-1 text-sm"
                      value={entriesPerPage}
                      onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                    >
                      <option value={10}>10</option>
                      <option value={25}>25</option>
                      <option value={50}>50</option>
                    </select>
                    <span className="text-sm ml-2">entries</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm mr-2">Search:</span>
                    <input 
                      type="text" 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="bg-white text-gray-800 rounded px-2 py-1 text-sm" 
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Office Name</th>
                    <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Office In-Charge</th>
                    <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Date & Time</th>
                    <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Notes</th>
                    <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredOffices.map((office) => (
                    <tr key={office.id} className="hover:bg-gray-50">
                      <td className="p-3">{office.officeName}</td>
                      <td className="p-3">{office.officeInCharge}</td>
                      <td className="p-3">{office.dateTime}</td>
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

            <div className="bg-white px-4 py-3 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  Showing 1 to {filteredOffices.length} of {filteredOffices.length} entries
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 border rounded text-sm text-gray-600 hover:bg-gray-50">Previous</button>
                  <button className="px-3 py-1 bg-green-800 text-white rounded text-sm">1</button>
                  <button className="px-3 py-1 border rounded text-sm text-gray-600 hover:bg-gray-50">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonnelClearanceTracking;