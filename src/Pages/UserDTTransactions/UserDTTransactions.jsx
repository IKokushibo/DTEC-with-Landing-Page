import React from 'react';
import { Helmet } from 'react-helmet';
import { FaUserCircle, FaBell, FaPrint } from 'react-icons/fa';
import Banner from '../../Images/banner.svg';

const transactionsData = [
  {
    documentName: 'Implementation Letter (In-Campus)',
    currentOffice: 'Guidance Office',
    nextOffice: 'Registrar',
    dateTime: '2024-08-24 14:30',
    status: 'Pending',
    notes: 'Pending review',
  },
  {
    documentName: 'Budget Proposal',
    currentOffice: 'Finance Office',
    nextOffice: 'Department Head',
    dateTime: '2024-08-23 09:15',
    status: 'Completed',
    notes: 'Approved and forwarded',
  },
  // Add more transactions as needed
];

function MyTransactions() {
  const handlePrint = (transaction) => {
    const printContent = `
      Document Name: ${transaction.documentName}
      Current Office: ${transaction.currentOffice}
      Next Office: ${transaction.nextOffice}
      Date and Time: ${transaction.dateTime}
      Status: ${transaction.status}
      Notes: ${transaction.notes}
    `;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Print Transaction</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            h1 { color: #166534; }
            .content { margin-top: 20px; }
            .field { margin-bottom: 10px; }
          </style>
        </head>
        <body>
          <h1>${transaction.documentName}</h1>
          <div class="content">
            <div class="field"><strong>Current Office:</strong> ${transaction.currentOffice}</div>
            <div class="field"><strong>Next Office:</strong> ${transaction.nextOffice}</div>
            <div class="field"><strong>Date and Time:</strong> ${transaction.dateTime}</div>
            <div class="field"><strong>Status:</strong> ${transaction.status}</div>
            <div class="field"><strong>Notes:</strong> ${transaction.notes}</div>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <>
      <Helmet>
        <title>My Transactions</title>
      </Helmet>

      {/* Header Section */}
      <div className="bg-green-800 py-4 px-6 flex justify-between items-center">
        <img src={Banner} alt="DTEC Logo" className="h-16" />
        <div className="flex items-center space-x-4">
          <FaBell className="text-white text-xl" />
          <FaUserCircle className="text-white text-2xl" />
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Track Your Transactions</h1>
        <div className="border-b border-gray-400 w-full my-4"></div>

        <table className="min-w-full bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-green-700 text-white">
              <th className="py-3 px-6 text-left">Document Name</th>
              <th className="py-3 px-6 text-left">Current Office</th>
              <th className="py-3 px-6 text-left">Next Office</th>
              <th className="py-3 px-6 text-left">Date and Time</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Notes</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactionsData.map((transaction, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-4 px-6">{transaction.documentName}</td>
                <td className="py-4 px-6">{transaction.currentOffice}</td>
                <td className="py-4 px-6">{transaction.nextOffice}</td>
                <td className="py-4 px-6">{transaction.dateTime}</td>
                <td className={`py-4 px-6 font-bold ${transaction.status === 'Completed' ? 'text-green-600' : 'text-red-600'}`}>
                  {transaction.status}
                </td>
                <td className="py-4 px-6">{transaction.notes || 'No notes available'}</td>
                <td className="py-4 px-6">
                  {transaction.status === 'Completed' && (
                    <button
                      onClick={() => handlePrint(transaction)}
                      className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 transition-colors flex items-center gap-2"
                    >
                      <FaPrint /> Print
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MyTransactions;