import React from 'react';
import { Helmet } from 'react-helmet';
import { FaUserCircle, FaBell } from 'react-icons/fa';
import Banner from '../../Images/banner.svg';
import newTransactionIcon from '../../Images/nt.svg';
import myTransactionIcon from '../../Images/mt.svg';

function PersonnelClearance() {
  const navigateClearanceForm = () => {
    window.location.href = '/personnel/clearance-form';
  }

  const navigateMyTransactions = () => {
    window.location.href = '/personnel/my-transactions';
  }

  return (
    <>
      <Helmet>
        <title>Faculty E-Clearance</title>
      </Helmet>

      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <div className="bg-green-800 py-4 px-6 flex justify-between items-center">
          <img src={Banner} alt="DTEC Logo" className="h-16" />
          <div className="flex items-center space-x-4">
            <FaBell className="text-white text-xl" />
            <FaUserCircle className="text-white text-2xl" />
          </div>
        </div>

        {/* Welcome Message */}
        <div className="p-8">
          <div className="flex justify-between">
            <div className='flex flex-col'>
              <h1 className="text-3xl font-bold">Welcome, Faculty!</h1>
              <p className="text-sm text-gray-600">Select your Transaction</p>
            </div>
            <div className='left-96'>
              <h2 className="text-3xl font-bold mb-8">Faculty E-Clearance</h2>
            </div>
          </div>

          <div className="border-b border-gray-400 w-full my-2"></div>

          {/* Transaction Buttons */}
          <div className="flex flex-wrap justify-center gap-8 mt-">
            {/* Button Options */}
            <div className="flex justify-center space-x-8 mt-10">
              <a onClick={navigateClearanceForm} 
                 className="bg-yellow-500 text-white font-bold py-8 px-12 rounded-lg flex flex-col items-center justify-center hover:bg-yellow-600 transition-colors w-72 h-45">
                <img src={newTransactionIcon} alt="New Transaction" className="h-12 mb-2" />
                New Clearance
                <span className="text-sm font-normal">Submit Faculty Clearance</span>
              </a>
              <a onClick={navigateMyTransactions} 
                 className="bg-yellow-500 text-white font-bold py-8 px-12 rounded-lg flex flex-col items-center justify-center hover:bg-yellow-600 transition-colors w-72 h-45">
                <img src={myTransactionIcon} alt="My Transaction" className="h-12 mb-2" />
                Clearance Status
                <span className="text-sm font-normal">1st Semester 2024-2025</span>
              </a>
            </div>
          </div>

          {/* Clearance Requirements Info */}
          <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Faculty Clearance Requirements</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Library/Multimedia Clearance</li>
              <li>Laboratory Clearance (Science, Criminology, Computer)</li>
              <li>HRM Department Clearance</li>
              <li>Nursing Department Clearance</li>
              <li>Cashier's Clearance</li>
              <li>Registrar's Clearance</li>
              <li>Accounting Clearance</li>
              <li>Property Custodian Clearance</li>
              <li>Program Head Approval</li>
              <li>Dean's Approval</li>
              <li>VPAF Approval</li>
              <li>VPA Approval</li>
              <li>President's Approval</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonnelClearance;