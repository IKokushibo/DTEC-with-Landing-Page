import React, { useState } from 'react';
import ImplementationLetter from './ImplementationLetter(InCampus)';
import ImplementationLetterOffCampus from './ImplementationLetterOffCampus';
import CommunicationLetterInCampus from './CommunicationLetterInCampus';
import CommunicationLetterOffCampus from './CommunicationLetterOffCampus';
import BudgetProposalLetter from './BudgetProposalLetter';

function LetterModal({ letter, onClose, signaturePreview, onSignatureChange, onApprove }) {
  const [showDeclineModal, setShowDeclineModal] = useState(false);
  const [declineReason, setDeclineReason] = useState('');

  if (!letter) return null;

  const handleDecline = () => {
    setShowDeclineModal(true);
  };

  const handleDeclineSubmit = () => {

    console.log('Declined with reason:', declineReason);
    setDeclineReason('');
    setShowDeclineModal(false);
    onClose();
  };

  const getLetterComponent = () => {
    switch (letter.nameOfTransaction) {
      case 'Implementation Letter (In Campus)':
        return (
          <ImplementationLetter
            letter={letter}
            signaturePreview={signaturePreview}
            onSignatureChange={onSignatureChange}
            showMayorSignature={true}
            showModeratorSignature={true}
            isOIC={true}
          />
        );
      case 'Implementation Letter (Off Campus)':
        return (
          <ImplementationLetterOffCampus
            letter={letter}
            signaturePreview={signaturePreview}
            onSignatureChange={onSignatureChange}
            showMayorSignature={true}
            showModeratorSignature={true}
            isOIC={true}
          />
        );
      case 'Communication Letter (In Campus)':
        return (
          <CommunicationLetterInCampus
            letter={letter}
            signaturePreview={signaturePreview}
            onSignatureChange={onSignatureChange}
            showMayorSignature={true}
            showModeratorSignature={true}
            isOIC={true}
          />
        );
      case 'Communication Letter (Off Campus)':
        return (
          <CommunicationLetterOffCampus
            letter={letter}
            signaturePreview={signaturePreview}
            onSignatureChange={onSignatureChange}
            showMayorSignature={true}
            showModeratorSignature={true}
            isOIC={true}
          />
        );
      case 'Budget Proposal':
        return (
          <BudgetProposalLetter
            letter={letter}
            signaturePreview={signaturePreview}
            onSignatureChange={onSignatureChange}
            showMayorSignature={true}
            showModeratorSignature={true}
            isOIC={true}
          />
        );
      default:
        return <div>Unsupported letter type</div>;
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg w-full max-w-6xl max-h-[90vh] overflow-y-auto">
          <div className="p-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold">Letter Details</h1>
                <p className="text-sm">Review and Approve Request</p>
              </div>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="border-b border-gray-400 w-full mb-8"></div>

            {/* Letter Content */}
            {getLetterComponent()}

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 mt-8">
              <button
                onClick={onClose}
                className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Cancel
              </button>
              <button
                onClick={handleDecline}
                className="px-6 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
              >
                Decline
              </button>
              <button
                onClick={onApprove}
                className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                disabled={!signaturePreview}
              >
                {signaturePreview ? 'Approve with Signature' : 'Please Add Signature to Approve'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decline Reason Modal */}
      {showDeclineModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[60]">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Decline Request</h2>
                <button 
                  onClick={() => setShowDeclineModal(false)} 
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Please provide a reason for declining:
                </label>
                <textarea
                  value={declineReason}
                  onChange={(e) => setDeclineReason(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  rows="4"
                  placeholder="Enter your reason here..."
                ></textarea>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowDeclineModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeclineSubmit}
                  disabled={!declineReason.trim()}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 disabled:bg-red-300"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LetterModal;