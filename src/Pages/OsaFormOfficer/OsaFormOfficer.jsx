import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaUserCircle, FaBell } from 'react-icons/fa';
import Banner from '../../Images/banner.svg';

function ClearanceForm() {
  const [socialClubs, setSocialClubs] = useState([{ name: '', position: '', treasurerSignature: '', moderatorSignature: '' }]);

  const handleAddSocialClub = () => {
    setSocialClubs([...socialClubs, { name: '', position: '', treasurerSignature: '', moderatorSignature: '' }]);
  };

  const handleSocialClubChange = (index, event) => {
    const newSocialClubs = [...socialClubs];
    newSocialClubs[index][event.target.name] = event.target.value;
    setSocialClubs(newSocialClubs);
  };

  const formFields = [
    { label: 'Name of Department', placeholder: 'Enter Department Name', key: 'departmentName' },
    { label: 'Position', placeholder: 'Enter Position', key: 'position' },
    { label: 'Treasurer\'s Signature', placeholder: 'Treasurer\'s Signature', key: 'treasurerSignature' },
    { label: 'Club Moderator\'s Signature', placeholder: 'Club Moderator\'s Signature', key: 'moderatorSignature' }
  ];

  return (
    <>
      <Helmet>
        <title>OSA Clearance Form</title>
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
              <h1 className="text-3xl font-bold">OSA Clearance Form</h1>
              <p className="text-sm">For Club Officers</p>
            </div>
            <h2 className="text-3xl font-bold">E-Clearance</h2>
          </div>

          <div className="border-b border-gray-400 w-full my-4"></div>
        </div>

        {/* Form Section */}
        <div className="p-8 max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
          <h2 className="text-center text-2xl font-bold mb-8">Certificate of Clearance</h2>

          {/* Departmental Club Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Departmental Club</h3>
            {formFields.map(({ label, placeholder }, index) => (
              <div key={index} className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">{label}:</label>
                <input
                  type="text"
                  placeholder={placeholder}
                  className="block w-full p-2 border border-gray-300 rounded"
                />
              </div>
            ))}
          </div>

          {/* Social Club Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Social Club(s)</h3>
            {socialClubs.map((club, index) => (
              <div key={index} className="mb-4 border-b pb-4">
                <label className="block text-gray-700 font-bold mb-2">Name of Club:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Club Name"
                  value={club.name}
                  onChange={(e) => handleSocialClubChange(index, e)}
                  className="block w-full p-2 border border-gray-300 rounded mb-2"
                />
                <label className="block text-gray-700 font-bold mb-2">Position:</label>
                <input
                  type="text"
                  name="position"
                  placeholder="Enter Position"
                  value={club.position}
                  onChange={(e) => handleSocialClubChange(index, e)}
                  className="block w-full p-2 border border-gray-300 rounded mb-2"
                />
                <label className="block text-gray-700 font-bold mb-2">Club Treasurer's Signature:</label>
                <input
                  type="text"
                  name="treasurerSignature"
                  placeholder="Treasurer's Signature"
                  value={club.treasurerSignature}
                  onChange={(e) => handleSocialClubChange(index, e)}
                  className="block w-full p-2 border border-gray-300 rounded mb-2"
                />
                <label className="block text-gray-700 font-bold mb-2">Club Moderator's Signature:</label>
                <input
                  type="text"
                  name="moderatorSignature"
                  placeholder="Moderator's Signature"
                  value={club.moderatorSignature}
                  onChange={(e) => handleSocialClubChange(index, e)}
                  className="block w-full p-2 border border-gray-300 rounded"
                />
              </div>
            ))}
            <button
              onClick={handleAddSocialClub}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add Another Social Club
            </button>
          </div>

          {/* Department Council Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Department Council</h3>
            {formFields.map(({ label, placeholder }, index) => (
              <div key={index} className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">{label}:</label>
                <input
                  type="text"
                  placeholder={placeholder}
                  className="block w-full p-2 border border-gray-300 rounded"
                />
              </div>
            ))}
          </div>

          {/* Central Student Council Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Central Student Council</h3>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">CSC Treasurer's Signature:</label>
              <input
                type="text"
                placeholder="Treasurer's Signature"
                className="block w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">CSC President's Signature:</label>
              <input
                type="text"
                placeholder="President's Signature"
                className="block w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-8">
              <label className="block text-gray-700 font-bold mb-2">CSC President's Signature:</label>
              <input
                type="text"
                placeholder="President's Signature"
                className="block w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Director of Student Affairs</h3>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">DSA Signature:</label>
              <input
                type="text"
                placeholder="President's Signature"
                className="block w-full p-2 border border-gray-300 rounded"
              />
            </div>
             {/* Submit / Cancel Buttons */}
        <div className="flex justify-end mt-6 space-x-4">
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Cancel</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Submit</button>
          </div>
          </div>
        </div>
        </div>
       
      </div>
    </>
  );
}

export default ClearanceForm;
