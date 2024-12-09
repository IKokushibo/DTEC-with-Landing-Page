import React, { useState } from "react";
import { FaUserCircle, FaBell, FaEye } from "react-icons/fa";
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

function OICDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedApplicationStatus, setSelectedApplicationStatus] = useState("SELECT ALL");
  const [selectedTransactionType, setSelectedTransactionType] = useState("SELECT ALL");

  // Your existing transactions array remains the same
  const transactions = [
    {
      id: "TR001",
      dateRequested: "2024-01-15 09:30 AM",
      transactionType: "Clearance Request",
      nameOfTransaction: "Clearance",
      requestedBy: "Juan Dela Cruz",
      transactionStatus: "For Evaluation",
      lastUpdatingDate: "2024-01-15 09:30 AM"
    },
    {
      id: "TR002",
      dateRequested: "2024-01-14 02:15 PM",
      transactionType: "Document/Letter Request",
      nameOfTransaction: "Communication Letter In-Campus",
      requestedBy: "Maria Santos",
      transactionStatus: "Approved",
      lastUpdatingDate: "2024-01-15 10:45 AM"
    },
    {
      id: "TR003",
      dateRequested: "2024-01-13 11:20 AM",
      transactionType: "Document/Letter Request",
      nameOfTransaction: "Implementation Letter Off-Campus",
      requestedBy: "Pedro Garcia",
      transactionStatus: "Pending",
      lastUpdatingDate: "2024-01-15 03:20 PM"
    },
    {
      id: "TR004",
      dateRequested: "2024-01-12 03:45 PM",
      transactionType: "Document/Letter Request",
      nameOfTransaction: "Budget Proposal",
      requestedBy: "Ana Reyes",
      transactionStatus: "For Evaluation",
      lastUpdatingDate: "2024-01-14 09:15 AM"
    },
    {
      id: "TR005",
      dateRequested: "2024-01-11 10:00 AM",
      transactionType: "Document/Letter Request",
      nameOfTransaction: "Communication Letter Off-Campus",
      requestedBy: "Carlos Bautista",
      transactionStatus: "Declined",
      lastUpdatingDate: "2024-01-13 02:30 PM"
    },
    {
      id: "TR006",
      dateRequested: "2024-01-10 01:30 PM",
      transactionType: "Document/Letter Request",
      nameOfTransaction: "Implementation Letter In-Campus",
      requestedBy: "Sofia Luna",
      transactionStatus: "Approved",
      lastUpdatingDate: "2024-01-10 01:30 PM"
    },
    {
      id: "TR007",
      dateRequested: "2024-01-09 11:45 AM",
      transactionType: "Clearance Request",
      nameOfTransaction: "Clearance",
      requestedBy: "Miguel Reyes",
      transactionStatus: "For Evaluation",
      lastUpdatingDate: "2024-01-09 11:45 AM"
    },
    {
      id: "TR008",
      dateRequested: "2024-01-08 03:20 PM",
      transactionType: "Document/Letter Request",
      nameOfTransaction: "Implementation Letter In-Campus",
      requestedBy: "Isabella Santos",
      transactionStatus: "Pending",
      lastUpdatingDate: "2024-01-08 03:20 PM"
    },
    {
      id: "TR009",
      dateRequested: "2024-01-07 02:10 PM",
      transactionType: "Document/Letter Request",
      nameOfTransaction: "Communication Letter Off-Campus",
      requestedBy: "Gabriel Cruz",
      transactionStatus: "Approved",
      lastUpdatingDate: "2024-01-07 04:30 PM"
    },
    {
      id: "TR010",
      dateRequested: "2024-01-06 09:15 AM",
      transactionType: "Document/Letter Request",
      nameOfTransaction: "Budget Proposal",
      requestedBy: "Emma Garcia",
      transactionStatus: "For Evaluation",
      lastUpdatingDate: "2024-01-06 09:15 AM"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
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

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesStatus = selectedStatus ? transaction.transactionStatus === selectedStatus : true;
    const matchesSearch = searchTerm === "" || 
      transaction.requestedBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.transactionType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.nameOfTransaction.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesApplicationStatus = selectedApplicationStatus === "SELECT ALL" ? true : 
      transaction.transactionStatus === selectedApplicationStatus;
    const matchesTransactionType = selectedTransactionType === "SELECT ALL" ? true : 
      transaction.transactionType === selectedTransactionType;

    return matchesStatus && matchesSearch && matchesApplicationStatus && matchesTransactionType;
  });

  const forEvaluationCount = transactions.filter(t => t.transactionStatus === "For Evaluation").length;
  const approvedCount = transactions.filter(t => t.transactionStatus === "Approved").length;

  const handleCardClick = (status) => {
    setSelectedStatus(status === selectedStatus ? null : status);
    setSelectedApplicationStatus("SELECT ALL");
    setSelectedTransactionType("SELECT ALL");
  };

  return (
    <>
      <Helmet>
        <title>OIC Dashboard</title>
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
          <h1 className="text-3xl font-bold text-gray-800">Welcome, Office In-Charge!</h1>
          <p className="mt-2 text-gray-600">Transaction Evaluation</p>
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
                <option>Pending</option>
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
            <div className="relative">
              <label className="block text-xs text-gray-500 mb-1">Transaction Type</label>
              <select 
                className="appearance-none bg-white border border-gray-300 rounded-md py-2 px-4 pr-8 w-48 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={selectedTransactionType}
                onChange={(e) => setSelectedTransactionType(e.target.value)}
              >
                <option>SELECT ALL</option>
                <option>Clearance Request</option>
                <option>Document/Letter Request</option>
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
                <h2 className="text-lg font-semibold">List of Transactions</h2>
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
                    <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Date Requested</th>
                    <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Transaction Type</th>
                    <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Name of Transaction</th>
                    <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Requested By</th>
                    <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Transaction Status</th>
                    <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Last Updating Date</th>
                    <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredTransactions.map((transaction) => (
                    <tr key={transaction.id} className="hover:bg-gray-50">
                      <td className="p-3">{transaction.dateRequested}</td>
                      <td className="p-3">{transaction.transactionType}</td>
                      <td className="p-3">{transaction.nameOfTransaction}</td>
                      <td className="p-3">{transaction.requestedBy}</td>
                      <td className="p-3">
                        <span className={`${getStatusColor(transaction.transactionStatus)} px-2 py-1 rounded text-sm`}>
                          {transaction.transactionStatus}
                        </span>
                      </td>
                      <td className="p-3">{transaction.lastUpdatingDate}</td>
                      <td className="p-3">
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded flex items-center space-x-1">
                          <FaEye className="text-sm" />
                          <span>VIEW</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white px-4 py-3 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  Showing 1 to {filteredTransactions.length} of {filteredTransactions.length} entries
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

export default OICDashboard;