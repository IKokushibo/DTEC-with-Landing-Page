import React, { useState } from "react";
import { FaUserCircle, FaBell, FaEye } from "react-icons/fa";
import { Helmet } from "react-helmet";
import Banner from "../../Images/banner.svg";
import PendingIcon from "../../Images/pending.png";
import ApprovedIcon from "../../Images/approved.png";
import LetterModal from "../../Components/Letters/LetterModal";
import { mockLetters } from "./mockData";

// StatusCard Component
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

function ModeratorTransaction() {
  // State management
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedApplicationStatus, setSelectedApplicationStatus] = useState("SELECT ALL");
  const [selectedLetterType, setSelectedLetterType] = useState("SELECT ALL");
  const [showModal, setShowModal] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [signaturePreview, setSignaturePreview] = useState(null);
  const [transactions] = useState(mockLetters);

  // Event handlers
  const handleSignatureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSignaturePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleViewLetter = (letter) => {
    setSelectedLetter(letter);
    setShowModal(true);
  };

  const handleApprove = () => {
    if (!signaturePreview) {
      alert("Please attach your signature first");
      return;
    }
    // Handle approval logic here
    setShowModal(false);
    setSignaturePreview(null);
  };

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

  // Filtering logic
  const filteredTransactions = transactions.filter((transaction) => {
    const matchesStatus = selectedStatus ? transaction.transactionStatus === selectedStatus : true;
    const matchesSearch = searchTerm === "" || 
      transaction.requestedBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.letterType.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesApplicationStatus = selectedApplicationStatus === "SELECT ALL" ? true : 
      transaction.transactionStatus === selectedApplicationStatus;
    const matchesLetterType = selectedLetterType === "SELECT ALL" ? true : 
      transaction.letterType === selectedLetterType;

    return matchesStatus && matchesSearch && matchesApplicationStatus && matchesLetterType;
  });

  const forEvaluationCount = transactions.filter(t => t.transactionStatus === "For Evaluation").length;
  const approvedCount = transactions.filter(t => t.transactionStatus === "Approved").length;

  const handleCardClick = (status) => {
    setSelectedStatus(status === selectedStatus ? null : status);
    setSelectedApplicationStatus("SELECT ALL");
    setSelectedLetterType("SELECT ALL");
  };

  return (
    <>
      <Helmet>
        <title>Moderator Transactions</title>
      </Helmet>

      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <div className="bg-green-800 py-4 px-6 flex justify-between items-center">
          <img src={Banner} alt="Banner Logo" className="h-16" />
          <div className="flex items-center space-x-4">
            <FaBell className="text-white text-xl" />
            <FaUserCircle className="text-white text-2xl" />
          </div>
        </div>

        {/* Title Section */}
        <div className="py-6 px-10">
          <h1 className="text-3xl font-bold text-gray-800">Club Letters Processing</h1>
          <p className="mt-2 text-gray-600">Manage and process club letters</p>
          <hr className="mt-4 border-gray-300" />
        </div>

        {/* Status Cards */}
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

          {/* Filters */}
          <div className="flex space-x-4">
            {/* Application Status Filter */}
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

            {/* Letter Type Filter */}
            <div className="relative">
              <label className="block text-xs text-gray-500 mb-1">Letter Type</label>
              <select 
                className="appearance-none bg-white border border-gray-300 rounded-md py-2 px-4 pr-8 w-64 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={selectedLetterType}
                onChange={(e) => setSelectedLetterType(e.target.value)}
              >
                <option>SELECT ALL</option>
                <option>Communication Letter (In Campus)</option>
                <option>Communication Letter (Off Campus)</option>
                <option>Implementation Letter (In Campus)</option>
                <option>Implementation Letter (Off Campus)</option>
                <option>Budget Proposal</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 mt-6">
                <svg className="fill-current h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Letters Table */}
        <div className="mx-10 mt-10">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            {/* Table Header */}
            <div className="bg-green-800 text-white p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">List of Letters</h2>
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
            
            {/* Table Content */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Date Requested</th>
                    <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Letter Type</th>
                    <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Name of Transaction</th>
                    <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Requested By</th>
                    <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Last Update</th>
                    <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredTransactions.map((transaction) => (
                    <tr key={transaction.id} className="hover:bg-gray-50">
                      <td className="p-3">{transaction.dateRequested}</td>
                      <td className="p-3">{transaction.letterType}</td>
                      <td className="p-3">{transaction.nameOfTransaction}</td>
                      <td className="p-3">{transaction.requestedBy}</td>
                      <td className="p-3">
                        <span className={`${getStatusColor(transaction.transactionStatus)} px-2 py-1 rounded text-sm`}>
                          {transaction.transactionStatus}
                        </span>
                      </td>
                      <td className="p-3">{transaction.lastUpdatingDate}</td>
                      <td className="p-3">
                        <button 
                          onClick={() => handleViewLetter(transaction)}
                          className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded flex items-center space-x-1"
                        >
                          <FaEye className="text-sm" />
                          <span>VIEW</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
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

        {/* Letter Modal */}
        {showModal && (
          <LetterModal
            letter={selectedLetter}
            onClose={() => {
              setShowModal(false);
              setSignaturePreview(null);
            }}
            signaturePreview={signaturePreview}
            onSignatureChange={handleSignatureChange}
            onApprove={handleApprove}
          />
        )}
      </div>
    </>
  );
}

export default ModeratorTransaction;