import React from 'react';
import NDTCLogo from '../../Images/banner.svg';

const CommunicationLetterPrint = React.forwardRef(({ letterData, signatureImage }, ref) => {
  return (
    <div ref={ref} className="bg-white p-8 max-w-[8.5in] mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <img src={NDTCLogo} alt="NDTC Logo" className="h-20 mx-auto mb-2" />
        <h1 className="text-xl font-bold">NOTRE DAME OF TACURONG COLLEGE</h1>
        <p>City of Tacurong, Sultan Kudarat</p>
        <p className="font-semibold">OFFICE OF THE STUDENT AFFAIRS</p>
      </div>

      {/* Date */}
      <div className="mb-6">
        <p>{new Date().toLocaleDateString()}</p>
      </div>

      {/* Recipient */}
      <div className="mb-6">
        <p className="font-bold">REV. FR. JESSIE P. PASQUIN, DCC</p>
        <p>President</p>
        <p>Notre Dame of Tacurong College</p>
        <p>City of Tacurong</p>
      </div>

      {/* Salutation */}
      <div className="mb-4">
        <p>Dear Fr. Pasquin:</p>
      </div>

      {/* Content */}
      <div className="mb-6">
        <p>Greetings of Peace and Glory!</p>
        <div className="my-4 whitespace-pre-line">
          {letterData?.content}
        </div>
        <p className="mt-4">Thank you very much.</p>
        <p>Excel at all times!</p>
      </div>

      {/* Signatures */}
      <div className="mt-8">
        <p>Respectfully yours,</p>
        
        <div className="mt-8">
          {signatureImage && (
            <img 
              src={signatureImage} 
              alt="Digital Signature" 
              className="h-20 mb-2"
            />
          )}
          <p className="font-bold">{letterData?.preparedBy || '[NAME OF CLUB MAYOR]'}</p>
          <p>MAYOR, CLUB, A.Y. 2024-2025</p>
        </div>

        <div className="mt-8">
          <p>Noted by:</p>
          <p className="font-bold mt-2">{letterData?.clubModerator || '[NAME OF CLUB MODERATOR]'}</p>
          <p>MODERATOR, CLUB, A.Y. 2024-2025</p>
        </div>

        <div className="mt-8">
          <p>Noted by:</p>
          <p className="font-bold mt-2">BENJIE E. TAHUM, LPT, MAED-TESL</p>
          <p>DIRECTOR OF STUDENT AFFAIRS</p>
        </div>

        <div className="mt-8">
          <p>Approved by:</p>
          <p className="font-bold mt-2">REV. FR. JESSIE P. PASQUIN, DCC</p>
          <p>PRESIDENT, NDTC</p>
        </div>
      </div>
    </div>
  );
});

export default CommunicationLetterPrint;