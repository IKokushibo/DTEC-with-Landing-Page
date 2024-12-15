import React from 'react';

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

export default StatusCard;