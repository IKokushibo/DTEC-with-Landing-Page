import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaUserCircle, FaBell } from 'react-icons/fa';
import Banner from '../../Images/banner.svg';

function ClearanceRequestForm() {
  // Example state to simulate whether a signature is attached
  const [signatures, setSignatures] = useState({
    guidanceInCharge: null,
    studentAffairs: null,
    scienceLab: null,
    computerLab: null,
    electronicsLab: null,
    dean: null,
    cashier: null,
    librarian: null,
    schoolNurse: null,
    programHead: null,
    hmLab: null,
    crimLab: null,
    registrar: null,
  });

  // Initialize notes state with "No notes available"
  const [notes, setNotes] = useState({
    guidanceInCharge: 'No notes available',
    studentAffairs: 'No notes available',
    scienceLab: 'No notes available',
    computerLab: 'No notes available',
    electronicsLab: 'No notes available',
    dean: 'No notes available',
    cashier: 'No notes available',
    librarian: 'No notes available',
    schoolNurse: 'No notes available',
    programHead: 'No notes available',
    hmLab: 'No notes available',
    crimLab: 'No notes available',
    registrar: 'No notes available',
  });

  const formFields = [
    { label: 'GUIDANCE IN-CHARGE', key: 'guidanceInCharge' },
    { label: 'DIRECTOR OF STUDENT AFFAIRS', key: 'studentAffairs' },
    { label: 'DEAN', key: 'dean' },
    { label: 'CASHIER', key: 'cashier' },
    { label: 'LIBRARIAN', key: 'librarian' },
    { label: 'SCHOOL NURSE', key: 'schoolNurse' },
    { label: 'PROGRAM HEAD (IF APPLICABLE)', key: 'programHead' },
    { label: 'HM LAB (IF APPLICABLE)', key: 'hmLab' },
    { label: 'CRIM LAB (IF APPLICABLE)', key: 'crimLab' },
    { label: 'REGISTRAR', key: 'registrar' },
  ];

  const laboratoryFields = [
    { label: 'SCIENCE LAB (IF APPLICABLE)', key: 'scienceLab' },
    { label: 'COMPUTER SCIENCE LAB', key: 'computerLab' },
    { label: 'ELECTRONICS & CIRCUITS LAB (IF APPLICABLE)', key: 'electronicsLab' },
  ];

  return (
    <>
      <Helmet>
        <title>Clearance Request Form</title>
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

        {/* Form Title */}
        <div className="p-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">New Clearance Request</h1>
              <p className="text-sm">Create New Request</p>
            </div>
            <h2 className="text-3xl font-bold">E-Clearance</h2>
          </div>

          <div className="border-b border-gray-400 w-full my-4"></div>
        </div>

        {/* Form Section */}
        <div className="p-8 max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
          <h2 className="text-center text-2xl font-bold mb-8">Certificate of Clearance</h2>

          <p className="text-center mb-6">
            This is to certify that <strong>TORRES, Christian James V.</strong>, a <strong>4th-year</strong> BSCS student, 
            has complied with all the requirements and is cleared of all responsibilities under my charge 
            this First Semester, A.Y. 2024 - 2025:
          </p>

          <div className="grid grid-cols-2 gap-x-16 gap-y-8 text-lg">
            {formFields.map(({ label, key }) => (
              <div key={key} className="flex flex-col">
                <div className="flex justify-between items-center">
                  <span className="font-bold">{label}:</span>
                  <span className={`ml-2 ${signatures[key] ? 'text-green-600' : 'text-red-600'}`}>
                    {signatures[key] ? 'Signed' : 'Pending'}
                  </span>
                </div>
                <div className="mt-2">
                  {/* Signature Preview */}
                  {signatures[key] ? (
                    <div className="border border-gray-400 p-2 rounded-md text-center">
                      <img src={signatures[key]} alt="Signature" className="h-10 mx-auto" />
                    </div>
                  ) : (
                    <div className="border border-gray-400 p-2 rounded-md text-center text-gray-500">
                      No signature yet (Pending)
                    </div>
                  )}
                </div>
                <div className="mt-2">
                  {/* Notes */}
                  <div className="border border-gray-300 p-2 rounded-md">
                    <span className="font-bold">Notes:</span>
                    <div className="text-gray-500">{notes[key]}</div>
                  </div>
                </div>
              </div>
            ))}

            {/* Laboratory In-Charge Section */}
            <div className="col-span-2">
              <div className="border border-gray-400 p-4 rounded-lg">
                <h3 className="font-bold mb-4">LABORATORY IN-CHARGE</h3>

                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                  {laboratoryFields.map(({ label, key }) => (
                    <div key={key} className="flex flex-col">
                      <div className="flex justify-between items-center">
                        <span className="font-bold">{label}:</span>
                        <span className={`ml-2 ${signatures[key] ? 'text-green-600' : 'text-red-600'}`}>
                          {signatures[key] ? 'Signed' : 'Pending'}
                        </span>
                      </div>
                      <div className="mt-2">
                        {/* Signature Preview */}
                        {signatures[key] ? (
                          <div className="border border-gray-400 p-2 rounded-md text-center">
                            <img src={signatures[key]} alt="Signature" className="h-10 mx-auto" />
                          </div>
                        ) : (
                          <div className="border border-gray-400 p-2 rounded-md text-center text-gray-500">
                            No signature yet (Pending)
                          </div>
                        )}
                      </div>
                      <div className="mt-2">
                        {/* Notes */}
                        <div className="border border-gray-300 p-2 rounded-md">
                          <span className="font-bold">Notes:</span>
                          <div className="text-gray-500">{notes[key]}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500">
              <strong>Important Note:</strong> For the lab-in-charge, please sign only those sections that are relevant to courses you have taken. 
              Once this form has been completed, present it to the <strong>Cashier</strong> to facilitate the release of 
              <strong> FINAL EXAM PERMIT</strong>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClearanceRequestForm;
