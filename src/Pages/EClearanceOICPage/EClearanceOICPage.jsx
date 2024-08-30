import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaUserCircle, FaBell } from 'react-icons/fa';
import Banner from '../../Images/banner.svg';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Make sure to set the app element for accessibility

function OfficeInChargeForm() {
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

  const [notes, setNotes] = useState({
    guidanceInCharge: '',
    studentAffairs: '',
    scienceLab: '',
    computerLab: '',
    electronicsLab: '',
    dean: '',
    cashier: '',
    librarian: '',
    schoolNurse: '',
    programHead: '',
    hmLab: '',
    crimLab: '',
    registrar: '',
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

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

  const handleSignatureUpload = (event, key) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSignatures(prev => ({ ...prev, [key]: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNotesChange = (event, key) => {
    setNotes(prev => ({ ...prev, [key]: event.target.value }));
  };

  const handleSubmit = () => {
    setModalIsOpen(true);
  };

  const handleConfirm = () => {
    setModalIsOpen(false);
    alert("Transaction is confirmed and finalized.");
    // Add logic here to finalize the transaction, such as updating a database or redirecting the user
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Office In-Charge Form</title>
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
              <h1 className="text-3xl font-bold">Clearance Approval</h1>
              <p className="text-sm">Office In-Charge</p>
            </div>
            <h2 className="text-3xl font-bold">E-Clearance</h2>
          </div>

          <div className="border-b border-gray-400 w-full my-4"></div>
        </div>

        {/* Form Section */}
        <div className="p-8 max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
          <h2 className="text-center text-2xl font-bold mb-8">Certificate of Clearance</h2>

          <p className="text-center mb-6">
            This is to certify that <strong>TORRES, Christian James V.</strong>, a 4th-year BSCS student, 
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
                  {/* Signature Upload */}
                  {signatures[key] ? (
                    <div className="border border-gray-400 p-2 rounded-md text-center">
                      <img src={signatures[key]} alt="Signature" className="h-10 mx-auto" />
                    </div>
                  ) : (
                    <input
                      type="file"
                      accept="image/*"
                      onChange={event => handleSignatureUpload(event, key)}
                      className="border border-gray-400 p-2 rounded-md"
                    />
                  )}
                </div>
                {/* Notes Input */}
                <div className="mt-4">
                  <textarea
                    value={notes[key]}
                    onChange={event => handleNotesChange(event, key)}
                    placeholder={`Add notes for ${label}`}
                    className="border border-gray-400 p-2 rounded-md w-full"
                    rows="3"
                  />
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
                        <span>{label}:</span>
                        <span className={`ml-2 ${signatures[key] ? 'text-green-600' : 'text-red-600'}`}>
                          {signatures[key] ? 'Signed' : 'Pending'}
                        </span>
                      </div>
                      <div className="mt-2">
                        {/* Signature Upload */}
                        {signatures[key] ? (
                          <div className="border border-gray-400 p-2 rounded-md text-center">
                            <img src={signatures[key]} alt="Signature" className="h-10 mx-auto" />
                          </div>
                        ) : (
                          <input
                            type="file"
                            accept="image/*"
                            onChange={event => handleSignatureUpload(event, key)}
                            className="border border-gray-400 p-2 rounded-md"
                          />
                        )}
                      </div>
                      {/* Notes Input */}
                      <div className="mt-4">
                        <textarea
                          value={notes[key]}
                          onChange={event => handleNotesChange(event, key)}
                          placeholder={`Add notes for ${label}`}
                          className="border border-gray-400 p-2 rounded-md w-full"
                          rows="3"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500 mb-6">
              <strong>Important Note:</strong> Please attach your signature only for sections relevant to the student's courses. 
              Once the form has been completed, ensure that it is submitted to the <strong>Cashier</strong> for the release of 
              the <strong>FINAL EXAM PERMIT</strong>.
            </p>

            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white py-3 px-6 rounded-lg text-lg font-bold hover:bg-green-700 transition-colors"
            >
              Confirm and Finalize
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            maxWidth: '500px',
            padding: '20px',
          },
        }}
      >
        <h2 className="text-2xl font-bold mb-4">Confirm and Finalize</h2>
        <p>Are you sure you want to confirm and finalize this transaction?</p>
        <div className="mt-4 flex justify-end space-x-4">
          <button
            onClick={handleConfirm}
            className="bg-green-600 text-white py-2 px-4 rounded-lg text-lg font-bold hover:bg-green-700 transition-colors"
          >
            Confirm
          </button>
          <button
            onClick={handleCloseModal}
            className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg text-lg font-bold hover:bg-gray-400 transition-colors"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
}

export default OfficeInChargeForm;
