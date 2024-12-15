import React from 'react';
import signature from './try.png';


function ImplementationLetter({ letter, signaturePreview, onSignatureChange }) {
  return (
    <div className="space-y-4">
      {/* Basic Information */}
      <div>
        <label className="block font-semibold mb-2">ORGANIZATION/CLUB NAME:</label>
        <div className="w-full border-gray-300 border-2 p-2 rounded-md bg-gray-50">
          {letter.content?.organizationName}
        </div>
      </div>

      <div>
        <label className="block font-semibold mb-2">NAME OF ACTIVITY:</label>
        <div className="w-full border-gray-300 border-2 p-2 rounded-md bg-gray-50">
          {letter.content?.activityName}
        </div>
      </div>

      <div>
        <label className="block font-semibold mb-2">SEMESTER & SCHOOL YEAR:</label>
        <div className="w-full border-gray-300 border-2 p-2 rounded-md bg-gray-50">
          {letter.content?.semester}
        </div>
      </div>

      <div>
        <label className="block font-semibold mb-2">TITLE:</label>
        <div className="w-full border-gray-300 border-2 p-2 rounded-md bg-gray-50">
          {letter.content?.title}
        </div>
      </div>

      <div>
        <label className="block font-semibold mb-2">DATE AND TIME:</label>
        <div className="w-full border-gray-300 border-2 p-2 rounded-md bg-gray-50">
          {letter.content?.dateTime}
        </div>
      </div>

      <div>
        <label className="block font-semibold mb-2">VENUE:</label>
        <div className="w-full border-gray-300 border-2 p-2 rounded-md bg-gray-50">
          {letter.content?.venue}
        </div>
      </div>

      <div>
        <label className="block font-semibold mb-2">PARTICIPANTS:</label>
        <div className="w-full border-gray-300 border-2 p-2 rounded-md bg-gray-50">
          {letter.content?.participants}
        </div>
      </div>

      {/* Content Sections */}
      {['RATIONALE', 'OBJECTIVES', 'SOURCES OF FUND', 'PROJECTED EXPENSES', 'EXPECTED OUTPUT'].map((field) => (
        <div key={field}>
          <label className="block font-semibold mb-2">{field}:</label>
          <div className="w-full border-gray-300 border-2 p-2 rounded-md bg-gray-50 whitespace-pre-line min-h-[100px]">
            {letter.content?.[field.toLowerCase().replace(/ /g, '')]}
          </div>
        </div>
      ))}

      {/* Signatures Section */}
      <div className="mt-6 text-center">
        <p className="font-semibold">Prepared by:</p>
        <img 
          src={signature}
          alt="Mayor's Signature" 
          className="mx-auto border border-gray-300 p-2 rounded-md mt-2"
          style={{ maxHeight: '150px', maxWidth: '300px' }}
        />
        <p className="mt-2 font-bold">CHRISTIAN JAMES V. TORRES</p>
        <p className="text-sm mt-2">Mayor, BLC A.Y. 2023-2024</p>
      </div>

      <div className="mt-6">
        <div className="text-center">
          <p className="font-semibold">Noted by:</p>
          <div className="mt-4">
            <label className="block font-semibold mb-2">Attach Signature</label>
            <input 
              type="file" 
              className="border-gray-300 border-2 p-2 rounded-md w-full" 
              accept="image/*"
              onChange={onSignatureChange}
            />
          </div>
          {signaturePreview && (
            <div className="mt-4">
              <p className="font-semibold">Signature Preview:</p>
              <img 
                src={signaturePreview} 
                alt="Signature Preview" 
                className="mx-auto border border-gray-300 p-2 rounded-md mt-2"
                style={{ maxHeight: '150px', maxWidth: '300px' }}
              />
            </div>
          )}
          <input 
            type="text" 
            className="w-full border-gray-300 border-2 p-2 rounded-md mt-4 text-center"
            placeholder="Name of Club Moderator"
          />
          <p className="text-sm mt-2">MODERATOR, CLUB, A.Y. 2024-2025</p>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="font-semibold">Approved by:</p>
        <p className="mt-2 font-bold">BENJIE E. TAHUM, LPT, MAED-TESL</p>
        <p>Director of Student Affairs</p>
      </div>
    </div>
  );
}

export default ImplementationLetter;