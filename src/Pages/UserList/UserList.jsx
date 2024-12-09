import React, { useState, useEffect, useRef } from "react";
import { FaTrash, FaPlus, FaUserCircle, FaBell, FaSignOutAlt } from "react-icons/fa";
import Banner from "../../Images/banner.svg";

function UserList() {
  const [users, setUsers] = useState([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state
  const [newUser, setNewUser] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    role: "Student",
    userId: "",
  });
  const [selectedRole, setSelectedRole] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const dropdownRef = useRef(null); // Ref for dropdown outside click

  const roles = [
    "Student",
    "Personnel",
    "Student Officer",
    "Moderator",
    "Office In-Charge",
  ];

  // Generate sample data for 7 pages (7 * 15 = 105)
  useEffect(() => {
    const sampleData = Array.from({ length: 105 }, (_, index) => ({
      id: index + 1,
      firstName: `First${index + 1}`,
      middleName: `Middle${index + 1}`,
      lastName: `Last${index + 1}`,
      role: roles[index % roles.length],
      userId: `U${index + 1}`,
    }));
    setUsers(sampleData);
  }, []);

  const handleCreateUser = () => {
    if (!newUser.firstName || !newUser.lastName || !newUser.userId) {
      alert("Please fill out all required fields.");
      return;
    }
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    setNewUser({
      firstName: "",
      middleName: "",
      lastName: "",
      role: "Student",
      userId: "",
    });
    setIsCreateModalOpen(false);
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this user?");
    if (confirmed) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  const handleLogout = () => {
    alert("You have been logged out!");
    // Add your logout logic here
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Filter users by selected role
  const filteredUsers = selectedRole
    ? users.filter((user) => user.role === selectedRole)
    : users;

  // Calculate total pages
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  // Paginate the users
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  // Pagination Logic
  const renderPagination = () => {
    const pages = [];
    const maxPagesToShow = 3;

    if (totalPages <= maxPagesToShow + 2) {
      // Show all pages if total pages are small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Add the first page
      pages.push(1);

      // Add ellipsis if currentPage is far from 2
      if (currentPage > maxPagesToShow) {
        pages.push("...");
      }

      // Add pages around the currentPage
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      // Add ellipsis if currentPage is far from totalPages - 1
      if (currentPage < totalPages - maxPagesToShow + 1) {
        pages.push("...");
      }

      // Add the last page
      pages.push(totalPages);
    }

    return (
      <div className="flex justify-center mt-4">
        <button
          className="px-3 py-1 bg-gray-200 rounded-l"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        {pages.map((page, index) =>
          typeof page === "number" ? (
            <button
              key={index}
              className={`px-3 py-1 ${
                currentPage === page ? "bg-green-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ) : (
            <span key={index} className="px-3 py-1">
              {page}
            </span>
          )
        )}
        <button
          className="px-3 py-1 bg-gray-200 rounded-r"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-green-800 py-4 px-6 flex justify-between items-center">
        <img src={Banner} alt="Company Logo" className="h-16" />
        <div className="flex items-center space-x-4">
          <FaBell className="text-white text-xl cursor-pointer" title="Notifications" />
          <div ref={dropdownRef} className="relative">
            <FaUserCircle
              className="text-white text-2xl cursor-pointer"
              onClick={toggleDropdown}
              title="User Menu"
            />
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg py-2 z-10">
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <FaSignOutAlt className="text-red-500 mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Heading and Sorting */}
      <div className="p-6 flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-800">List of Users</h2>
        <div className="flex items-center space-x-4">
          <select
            className="border p-2 rounded"
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            <option value="">All Roles</option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded flex items-center"
            onClick={() => setIsCreateModalOpen(true)}
          >
            <FaPlus className="mr-2" /> Create User
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="p-3 , pb-0">
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300 bg-white shadow-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2">First Name</th>
                <th className="border border-gray-300 px-4 py-2">Middle Name</th>
                <th className="border border-gray-300 px-4 py-2">Last Name</th>
                <th className="border border-gray-300 px-4 py-2">Role</th>
                <th className="border border-gray-300 px-4 py-2">User ID</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-100">
                  <td className="border px-4 py-2">{user.firstName}</td>
                  <td className="border px-4 py-2">{user.middleName}</td>
                  <td className="border px-4 py-2">{user.lastName}</td>
                  <td className="border px-4 py-2">{user.role}</td>
                  <td className="border px-4 py-2">{user.userId}</td>
                  <td className="border px-4 py-2 text-center">
                    <button
                      className="text-red-500 hover:text-red-700 mx-2"
                      title="Delete"
                      onClick={() => handleDelete(user.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-2">
      {renderPagination()}
      </div>

      {/* Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Create New User</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">First Name</label>
                <input
                  type="text"
                  value={newUser.firstName}
                  onChange={(e) =>
                    setNewUser({ ...newUser, firstName: e.target.value })
                  }
                  className="w-full border p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Middle Name</label>
                <input
                  type="text"
                  value={newUser.middleName}
                  onChange={(e) =>
                    setNewUser({ ...newUser, middleName: e.target.value })
                  }
                  className="w-full border p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  value={newUser.lastName}
                  onChange={(e) =>
                    setNewUser({ ...newUser, lastName: e.target.value })
                  }
                  className="w-full border p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Role</label>
                <select
                  value={newUser.role}
                  onChange={(e) =>
                    setNewUser({ ...newUser, role: e.target.value })
                  }
                  className="w-full border p-2 rounded"
                >
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">User ID</label>
                <input
                  type="text"
                  value={newUser.userId}
                  onChange={(e) =>
                    setNewUser({ ...newUser, userId: e.target.value })
                  }
                  className="w-full border p-2 rounded"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsCreateModalOpen(false)}
                  className="px-4 py-2 bg-gray-200 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleCreateUser}
                  className="px-4 py-2 bg-green-500 text-white rounded"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserList;
