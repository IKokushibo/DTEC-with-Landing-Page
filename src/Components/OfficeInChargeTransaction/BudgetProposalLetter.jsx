import React from 'react';
import { FingerPrintIcon } from '@heroicons/react/24/outline';
import signature from './try.png';

function BudgetProposalLetter({ letter, signaturePreview, onSignatureChange }) {
  const calculateTotal = () => {
    return letter.content?.expenses?.reduce((total, expense) => {
      return total + (parseFloat(expense.amount) || 0);
    }, 0) || 0;
  };

  const handleCaptureFingerprint = () => {
    // This function would integrate with your fingerprint capture app
    // You can implement the actual integration logic here
    console.log('Opening fingerprint capture app');
  };

  return (
    <div className="space-y-4">
      <h2 className="text-center text-2xl font-bold mb-8">PROPOSED BUDGET</h2>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block font-semibold mb-2">Name of Activity:</label>
          <div className="w-full border-gray-300 border-2 p-2 rounded-md bg-gray-50">
            {letter.content?.activityName}
          </div>
        </div>
        <div>
          <label className="block font-semibold mb-2">Date:</label>
          <div className="w-full border-gray-300 border-2 p-2 rounded-md bg-gray-50">
            {letter.content?.date}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block font-semibold mb-2">Venue:</label>
          <div className="w-full border-gray-300 border-2 p-2 rounded-md bg-gray-50">
            {letter.content?.venue}
          </div>
        </div>
        <div>
          <label className="block font-semibold mb-2">Source of Fund:</label>
          <div className="w-full border-gray-300 border-2 p-2 rounded-md bg-gray-50">
            {letter.content?.sourceOfFund}
          </div>
        </div>
      </div>

      <div>
        <label className="block font-semibold mb-2">Amount Allotted for the Activity:</label>
        <div className="w-full border-gray-300 border-2 p-2 rounded-md bg-gray-50">
          ₱ {parseFloat(letter.content?.amountAllotted || 0).toFixed(2)}
        </div>
      </div>

      <div>
        <label className="block font-semibold mb-2">Expected Expenses:</label>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Item</th>
              <th className="border border-gray-300 p-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {letter.content?.expenses?.map((expense, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{expense.item}</td>
                <td className="border border-gray-300 p-2 text-right">
                  ₱ {parseFloat(expense.amount || 0).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="border border-gray-300 p-2 font-bold">Total</td>
              <td className="border border-gray-300 p-2 text-right font-bold">
                ₱ {calculateTotal().toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Mayor's Signature (Always shown) */}
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

      {/* Moderator's Signature (Already signed) */}
      <div className="mt-6 text-center">
        <p className="font-semibold">Noted by:</p>
        <img 
          src={signature}
          alt="Moderator's Signature" 
          className="mx-auto border border-gray-300 p-2 rounded-md mt-2"
          style={{ maxHeight: '150px', maxWidth: '300px' }}
        />
        <p className="mt-2 font-bold">[Moderator Name]</p>
        <p className="text-sm mt-2">Moderator, BLC A.Y. 2023-2024</p>
      </div>

      {/* DSA Signature Section */}
      <div className="mt-6 text-center">
        <p className="font-semibold">Noted by:</p>
        <div className="mt-4">
          <button
            onClick={handleCaptureFingerprint}
            className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mx-auto"
          >
            <FingerPrintIcon className="w-6 h-6" />
            <span>Capture Fingerprint</span>
          </button>
        </div>
        {signaturePreview && (
          <div className="mt-4">
            <img 
              src={signaturePreview} 
              alt="Signature Preview" 
              className="mx-auto border border-gray-300 p-2 rounded-md mt-2"
              style={{ maxHeight: '150px', maxWidth: '300px' }}
            />
          </div>
        )}
        <p className="mt-2 font-bold">BENJIE E. TAHUM, LPT, MAED-TESL</p>
        <p>Director of Student Affairs</p>
      </div>

      {/* Finance Officer Signature Section */}
      <div className="mt-6 text-center">
        <p className="font-semibold">Noted by:</p>
        <div className="mt-4">
          <button
            onClick={handleCaptureFingerprint}
            className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mx-auto"
          >
            <FingerPrintIcon className="w-6 h-6" />
            <span>Capture Fingerprint</span>
          </button>
        </div>
        {signaturePreview && (
          <div className="mt-4">
            <img 
              src={signaturePreview} 
              alt="Signature Preview" 
              className="mx-auto border border-gray-300 p-2 rounded-md mt-2"
              style={{ maxHeight: '150px', maxWidth: '300px' }}
            />
          </div>
        )}
        <p className="mt-2 font-bold">VANESSA CLAIRE C. ESPAÑA, CPA</p>
        <p>Finance Officer</p>
      </div>

      {/* President's Signature Section */}
      <div className="mt-6 text-center">
        <p className="font-semibold">Approved by:</p>
        <div className="mt-4">
          <button
            onClick={handleCaptureFingerprint}
            className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mx-auto"
          >
            <FingerPrintIcon className="w-6 h-6" />
            <span>Capture Fingerprint</span>
          </button>
        </div>
        {signaturePreview && (
          <div className="mt-4">
            <img 
              src={signaturePreview} 
              alt="Signature Preview" 
              className="mx-auto border border-gray-300 p-2 rounded-md mt-2"
              style={{ maxHeight: '150px', maxWidth: '300px' }}
            />
          </div>
        )}
        <p className="mt-2 font-bold">REV. FR. JESSIE P. PASQUIN, DCC</p>
        <p>President</p>
      </div>
    </div>
  );
}

export default BudgetProposalLetter;