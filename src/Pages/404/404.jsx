import React from "react";
import { useNavigate } from "react-router-dom";
import notFound from '../../Images/404.png';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img
        src={notFound}
        alt="404 Not Found"
        className="w-3/4 max-w-3xl mb-6"
      />
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none"
      >
        Back to Home
      </button>
    </div>
  );
};

export default NotFoundPage;
