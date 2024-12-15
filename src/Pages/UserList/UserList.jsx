import React, { useState, useEffect, useRef } from "react";
import { FaTrash, FaPlus, FaUserCircle, FaBell, FaSignOutAlt, FaSearch, FaEdit, FaKey, FaFingerprint, FaSignature } from "react-icons/fa";
import Banner from "../../Images/banner.svg";


const offices = [
  "COMMUNITY & DEVELOPMENT SERVICES OFFICE",
  "PRESIDENT'S OFFICE",
  "FINANCE OFFICE",
  "GUIDANCE OFFICE",
  "DIRECTOR OF STUDENT AFFAIRS",
  "DEAN'S OFFICE",
  "CASHIER",
  "LIBRARY",
  "CLINIC",
  "PROGRAM HEAD'S OFFICE",
  "HOTEL MANAGEMENT LABORATORY",
  "CRIMINOLOGY LABORATORY",
  "REGISTRAR'S OFFICE",
  "SCIENCE LABORATORY",
  "COMPUTER SCIENCE LABORATORY",
  "ELECTRONICS & CIRCUITS LABORATORY"
];
// Course and department data
const courses = [
  {
    department: "College of Arts and Sciences, and Education",
    programs: [
      "Bachelor of Arts in Political Science (AB)",
      "Bachelor of Elementary Education (BEEd)",
      "Bachelor of Science in Computer Engineering (BSCpE)",
      "Bachelor of Science in Computer Science (BSCS)",
      "Bachelor of Science in Criminology (BSCrim)",
      "Bachelor of Science in Social Work (BSSW)",
      "Bachelor of Secondary Education (BSEd) Major in English",
      "Bachelor of Secondary Education (BSEd) Major in Mathematics",
    ],
  },
  {
    department: "College of Business and Technical Vocational Courses",
    programs: [
      "Bachelor of Science in Accountancy (BSA)",
      "Bachelor of Science in Business Administration (BSBA) Major in Financial Management",
      "Bachelor of Science in Business Administration (BSBA) Major in Marketing Management",
      "Bachelor of Science in Hospitality Management (BSHM)",
      "TESDA Programs - Cookery NC II",
      "TESDA Programs - Food and Beverages NC II",
      "TESDA Programs - Housekeeping NC II",
    ],
  },
  {
    department: "College of Nursing",
    programs: ["Bachelor of Science in Nursing (BSN)"],
  },
];

// Club data
const departmentalClubs = [
  "PSITS",
  "FINANCE",
  "JSWAP",
  "ICPEP.SE",
  "PNSA",
  "JHARA",
  "JPMA",
  "JPIA",
  "UPSCISTS",
  "JMC",
  "PMC"
];

const socialClubs = [
  "JEM",
  "CES",
  "ASPA",
  "PCC",
  "MSO",
  "YSLC",
  "BLC",
  "KKB",
  "KARATE-DO",
  "TEATRO BALINTATAW"
];

const staffRoles = ['Moderator', 'Personnel', 'Office In-Charge'];
const roles = [
  "Student",
  "Personnel",
  "Student Officer",
  "Moderator",
  "Office In-Charge",
];
const yearLevels = ["1", "2", "3", "4"];

function UserList() {
  const [users, setUsers] = useState([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [availablePrograms, setAvailablePrograms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    role: "Student",
    office: "",
    userId: "",
    department: "",
    course: "",
    yearLevel: "",
    departmentClub: "",
    departmentClubRole: "",  
    socialClub: "",
    socialClubRole: "",   
      
  });
  const [selectedRole, setSelectedRole] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const clubRoles = ['Officer', 'Member'];


  const dropdownRef = useRef(null);

  useEffect(() => {
    const sampleData = Array.from({ length: 105 }, (_, index) => ({
      id: index + 1,
      firstName: `First${index + 1}`,
      middleName: `Middle${index + 1}`,
      lastName: `Last${index + 1}`,
      role: roles[index % roles.length],
      userId: `U${index + 1}`,
      department: courses[index % courses.length].department,
      course: courses[index % courses.length].programs[0],
      yearLevel: staffRoles.includes(roles[index % roles.length]) ? 'N/A' : yearLevels[index % yearLevels.length],
      departmentClub: departmentalClubs[index % departmentalClubs.length],
      departmentClubRole: clubRoles[index % clubRoles.length],
      socialClub: socialClubs[index % socialClubs.length],
      socialClubRole: clubRoles[index % clubRoles.length],
    }));
    setUsers(sampleData);
  }, []);

  useEffect(() => {
    const selectedDepartmentData = courses.find(
      (c) => c.department === newUser.department
    );
    setAvailablePrograms(selectedDepartmentData?.programs || []);
    if (selectedDepartmentData && !selectedDepartmentData.programs.includes(newUser.course)) {
      setNewUser(prev => ({ ...prev, course: "" }));
    }
  }, [newUser.department]);

  useEffect(() => {
    if (staffRoles.includes(newUser.role)) {
      setNewUser(prev => ({ ...prev, yearLevel: 'N/A' }));
    }
  }, [newUser.role]);

  const handleCreateUser = () => {
    if (!newUser.firstName || !newUser.lastName || !newUser.userId || !newUser.department || !newUser.course) {
      alert("Please fill out all required fields.");
      return;
    }
    
    const yearLevel = staffRoles.includes(newUser.role) ? 'N/A' : newUser.yearLevel;
    
    setUsers([...users, { ...newUser, id: users.length + 1, yearLevel }]);
    setNewUser({
      firstName: "",
      middleName: "",
      lastName: "",
      role: "Student",
      userId: "",
      department: "",
      course: "",
      yearLevel: "",
      departmentClub: "",
      socialClub: "",
    });
    setIsCreateModalOpen(false);
  };

  const handleEdit = (user) => {
    setEditingUser({ ...user });
    setIsEditModalOpen(true);
  };

  const handleUpdateUser = () => {
    if (!editingUser.firstName || !editingUser.lastName || !editingUser.userId || !editingUser.department || !editingUser.course) {
      alert("Please fill out all required fields.");
      return;
    }

    setUsers(users.map(user => 
      user.id === editingUser.id ? editingUser : user
    ));
    setIsEditModalOpen(false);
    setEditingUser(null);
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this user?");
    if (confirmed) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  const handleResetPassword = (userId) => {
    // Implement password reset logic here
    alert(`Password reset requested for user ${userId}`);
  };

  const handleEnrollFingerprint = (userId) => {
    // Implement fingerprint enrollment logic here
    alert(`Fingerprint enrollment requested for user ${userId}`);
  };

  const handleEnrollSignature = (userId) => {
    // Implement signature enrollment logic here
    alert(`Signature enrollment requested for user ${userId}`);
  };

  const handleLogout = () => {
    alert("You have been logged out!");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

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

  const filterUsers = (users) => {
    return users.filter((user) => {
      const searchString = searchTerm.toLowerCase();
      return (
        user.firstName.toLowerCase().includes(searchString) ||
        user.lastName.toLowerCase().includes(searchString) ||
        user.userId.toLowerCase().includes(searchString) ||
        user.department.toLowerCase().includes(searchString) ||
        user.course.toLowerCase().includes(searchString)
      );
    });
  };

  const filteredAndSearchedUsers = filterUsers(
    selectedRole ? users.filter((user) => user.role === selectedRole) : users
  );

  const totalPages = Math.ceil(filteredAndSearchedUsers.length / itemsPerPage);

  const paginatedUsers = filteredAndSearchedUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const pages = [];
    const maxPagesToShow = 3;

    if (totalPages <= maxPagesToShow + 2) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > maxPagesToShow) {
        pages.push("...");
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - maxPagesToShow + 1) {
        pages.push("...");
      }

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

      <div className="p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl font-semibold text-gray-800">List of Users</h2>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-64 pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <select
              className="border p-2 rounded w-full sm:w-auto"
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
          </div>
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded flex items-center"
            onClick={() => setIsCreateModalOpen(true)}
          >
            <FaPlus className="mr-2" /> Create User
          </button>
        </div>
      </div>

      <div className="p-3 pb-0">
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300 bg-white shadow-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2 w-32">First Name</th>
                <th className="border border-gray-300 px-4 py-2 w-32">Middle Name</th>
                <th className="border border-gray-300 px-4 py-2 w-32">Last Name</th>
                <th className="border border-gray-300 px-4 py-2 w-32">Role</th>
                <th className="border border-gray-300 px-4 py-2 w-32">Office</th>
                <th className="border border-gray-300 px-4 py-2 w-24">User ID</th>
                <th className="border border-gray-300 px-4 py-2" style={{ width: '200px', minWidth: '200px' }}>
                  <div className="max-w-xs break-words">Department</div>
                </th>
                <th className="border border-gray-300 px-4 py-2" style={{ width: '200px', minWidth: '200px' }}>
                  <div className="max-w-xs break-words">Course</div>
                </th>
                <th className="border border-gray-300 px-4 py-2 w-16">Year</th>
                <th className="border border-gray-300 px-4 py-2" style={{ width: '200px', minWidth: '200px' }}>
                  <div className="max-w-xs break-words">Department Club</div>
                </th>
                <th className="border border-gray-300 px-4 py-2 w-32">Dept Club Role</th>
                <th className="border border-gray-300 px-4 py-2" style={{ width: '200px', minWidth: '200px' }}>
                  <div className="max-w-xs break-words">Social Club</div>
                </th>
                <th className="border border-gray-300 px-4 py-2 w-32">Social Club Role</th>
                <th className="border border-gray-300 px-4 py-2 w-24 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-100">
                  <td className="border px-4 py-2">{user.firstName}</td>
                  <td className="border px-4 py-2">{user.middleName}</td>
                  <td className="border px-4 py-2">{user.lastName}</td>
                  <td className="border px-4 py-2">{user.role}</td>
                  <td className="border px-4 py-2">{user.office || '-'}</td>
                  <td className="border px-4 py-2">{user.userId}</td>
                  <td className="border px-4 py-2" style={{ width: '200px', minWidth: '200px' }}>
                    <div className="max-w-xs break-words">{user.department}</div>
                  </td>
                  <td className="border px-4 py-2" style={{ width: '200px', minWidth: '200px' }}>
                    <div className="max-w-xs break-words">{user.course}</div>
                  </td>
                  <td className="border px-4 py-2">{user.yearLevel}</td>
                  <td className="border px-4 py-2" style={{ width: '200px', minWidth: '200px' }}>
                    <div className="max-w-xs break-words">{user.departmentClub}</div>
                  </td>
                  <td className="border px-4 py-2">{user.departmentClubRole}</td>
                  <td className="border px-4 py-2" style={{ width: '200px', minWidth: '200px' }}>
                    <div className="max-w-xs break-words">{user.socialClub}</div>
                  </td>
                  <td className="border px-4 py-2">{user.socialClubRole}</td>
                  <td className="border px-4 py-2">
                    <div className="flex justify-center space-x-2">
                      <button
                        className="text-blue-500 hover:text-blue-700"
                        title="Edit"
                        onClick={() => handleEdit(user)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="text-yellow-500 hover:text-yellow-700"
                        title="Reset Password"
                        onClick={() => handleResetPassword(user.id)}
                      >
                        <FaKey />
                      </button>
                      <div className="relative group">
                        <button
                          className="text-green-500 hover:text-green-700"
                          title="Enroll"
                        >
                          <FaFingerprint />
                        </button>
                        {user.role === "Office In-Charge" && (
                          <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg py-2 hidden group-hover:block z-10">
                            <button
                              onClick={() => handleEnrollFingerprint(user.id)}
                              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              <FaFingerprint className="mr-2" />
                              Enroll Fingerprint
                            </button>
                            <button
                              onClick={() => handleEnrollSignature(user.id)}
                              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              <FaSignature className="mr-2" />
                              Enroll Signature
                            </button>
                          </div>
                        )}
                      </div>
                      <button
                        className="text-red-500 hover:text-red-700"
                        title="Delete"
                        onClick={() => handleDelete(user.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-center mt-2">
        {renderPagination()}
      </div>

      {isCreateModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4">Create New User</h2>
            <form className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">First Name *</label>
                <input
                  type="text"
                  value={newUser.firstName}
                  onChange={(e) =>
                    setNewUser({ ...newUser, firstName: e.target.value })
                  }
                  className="w-full border p-2 rounded"
                  required
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
                <label className="block text-sm font-medium mb-1">Last Name *</label>
                <input
                  type="text"
                  value={newUser.lastName}
                  onChange={(e) =>
                    setNewUser({ ...newUser, lastName: e.target.value })
                  }
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
              <div className="mb-4">
  <label className="block text-sm font-medium mb-1">Role *</label>
  <div className="flex gap-2">
    <select
      value={newUser.role}
      onChange={(e) =>
        setNewUser({ ...newUser, role: e.target.value })
      }
      className="w-full border p-2 rounded"
      required
    >
      {roles.map((role) => (
        <option key={role} value={role}>
          {role}
        </option>
      ))}
    </select>
    {newUser.role === "Office In-Charge" && (
      <select
        value={newUser.office}
        onChange={(e) =>
          setNewUser({ ...newUser, office: e.target.value })
        }
        className="w-40 border p-2 rounded"
        required
      >
        <option value="">Select Office</option>
        {offices.map((office) => (
          <option key={office} value={office}>
            {office}
          </option>
        ))}
      </select>
    )}
  </div>
</div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">User ID *</label>
                <input
                  type="text"
                  value={newUser.userId}
                  onChange={(e) =>
                    setNewUser({ ...newUser, userId: e.target.value })
                  }
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Department *</label>
                <select
                  value={newUser.department}
                  onChange={(e) =>
                    setNewUser({ ...newUser, department: e.target.value })
                  }
                  className="w-full border p-2 rounded"
                  required
                >
                  <option value="">Select Department</option>
                  {courses.map((course) => (
                    <option key={course.department} value={course.department}>
                      {course.department}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Course *</label>
                <select
                  value={newUser.course}
                  onChange={(e) =>
                    setNewUser({ ...newUser, course: e.target.value })
                  }
                  className="w-full border p-2 rounded"
                  required
                  disabled={!newUser.department}
                >
                  <option value="">Select Course</option>
                  {availablePrograms.map((program) => (
                    <option key={program} value={program}>
                      {program}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Year Level</label>
                <select
                  value={newUser.yearLevel}
                  onChange={(e) =>
                    setNewUser({ ...newUser, yearLevel: e.target.value })
                  }
                  className="w-full border p-2 rounded"
                  disabled={staffRoles.includes(newUser.role)}
                >
                  <option value="">Select Year Level</option>
                  {yearLevels.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Department Club</label>
                <div className="flex gap-2">
                  <select
                    value={newUser.departmentClub}
                    onChange={(e) =>
                      setNewUser({ ...newUser, departmentClub: e.target.value })
                    }
                    className="w-full border p-2 rounded"
                  >
                    <option value="">Select Department Club</option>
                    {departmentalClubs.map((club) => (
                      <option key={club} value={club}>
                        {club}
                      </option>
                    ))}
                  </select>
                  <select
                    value={newUser.departmentClubRole}
                    onChange={(e) =>
                      setNewUser({ ...newUser, departmentClubRole: e.target.value })
                    }
                    className="w-40 border p-2 rounded"
                    disabled={!newUser.departmentClub}
                  >
                    <option value="">Select Role</option>
                    {clubRoles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mb-4">
  <label className="block text-sm font-medium mb-1">Social Club</label>
  <div className="flex gap-2">
    <select
      value={newUser.socialClub}
      onChange={(e) =>
        setNewUser({ ...newUser, socialClub: e.target.value })
      }
      className="w-full border p-2 rounded"
    >
      <option value="">Select Social Club</option>
      {socialClubs.map((club) => (
        <option key={club} value={club}>
          {club}
        </option>
      ))}
    </select>
    <select
      value={newUser.socialClubRole}
      onChange={(e) =>
        setNewUser({ ...newUser, socialClubRole: e.target.value })
      }
      className="w-40 border p-2 rounded"
      disabled={!newUser.socialClub}
    >
      <option value="">Select Role</option>
      {clubRoles.map((role) => (
        <option key={role} value={role}>
          {role}
        </option>
      ))}
    </select>
  </div>
</div>
              <div className="col-span-2 flex justify-end">
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

      {isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4">Edit User</h2>
            <form className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">First Name *</label>
                <input
                  type="text"
                  value={editingUser?.firstName || ''}
                  onChange={(e) =>
                    setEditingUser({ ...editingUser, firstName: e.target.value })
                  }
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Middle Name</label>
                <input
                  type="text"
                  value={editingUser?.middleName || ''}
                  onChange={(e) =>
                    setEditingUser({ ...editingUser, middleName: e.target.value })
                  }
                  className="w-full border p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Last Name *</label>
                <input
                  type="text"
                  value={editingUser?.lastName || ''}
                  onChange={(e) =>
                    setEditingUser({ ...editingUser, lastName: e.target.value })
                  }
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
              <div className="mb-4">
  <label className="block text-sm font-medium mb-1">Role *</label>
  <div className="flex gap-2">
    <select
      value={editingUser?.role || ''}
      onChange={(e) =>
        setEditingUser({ ...editingUser, role: e.target.value })
      }
      className="w-full border p-2 rounded"
      required
    >
      {roles.map((role) => (
        <option key={role} value={role}>
          {role}
        </option>
      ))}
    </select>
    {editingUser?.role === "Office In-Charge" && (
      <select
        value={editingUser?.office || ''}
        onChange={(e) =>
          setEditingUser({ ...editingUser, office: e.target.value })
        }
        className="w-40 border p-2 rounded"
        required
      >
        <option value="">Select Office</option>
        {offices.map((office) => (
          <option key={office} value={office}>
            {office}
          </option>
        ))}
      </select>
    )}
  </div>
</div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">User ID *</label>
                <input
                  type="text"
                  value={editingUser?.userId || ''}
                  onChange={(e) =>
                    setEditingUser({ ...editingUser, userId: e.target.value })
                  }
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Department *</label>
                <select
                  value={editingUser?.department || ''}
                  onChange={(e) =>
                    setEditingUser({ ...editingUser, department: e.target.value })
                  }
                  className="w-full border p-2 rounded"
                  required
                >
                  <option value="">Select Department</option>
                  {courses.map((course) => (
                    <option key={course.department} value={course.department}>
                      {course.department}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Course *</label>
                <select
                  value={editingUser?.course || ''}
                  onChange={(e) =>
                    setEditingUser({ ...editingUser, course: e.target.value })
                  }
                  className="w-full border p-2 rounded"
                  required
                >
                  <option value="">Select Course</option>
                  {courses
                    .find((c) => c.department === editingUser?.department)
                    ?.programs.map((program) => (
                      <option key={program} value={program}>
                        {program}
                      </option>
                    ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Year Level</label>
                <select
                  value={editingUser?.yearLevel || ''}
                  onChange={(e) =>
                    setEditingUser({ ...editingUser, yearLevel: e.target.value })
                  }
                  className="w-full border p-2 rounded"
                  disabled={staffRoles.includes(editingUser?.role)}
                >
                  <option value="">Select Year Level</option>
                  {yearLevels.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
  <label className="block text-sm font-medium mb-1">Department Club</label>
  <div className="flex space-x-2">
    <select
      value={editingUser?.departmentClub || ''}
      onChange={(e) =>
        setEditingUser({ ...editingUser, departmentClub: e.target.value })
      }
      className="w-full border p-2 rounded"
    >
      <option value="">Select Department Club</option>
      {departmentalClubs.map((club) => (
        <option key={club} value={club}>
          {club}
        </option>
      ))}
    </select>
    <select
      value={editingUser?.departmentClubRole || ''}
      onChange={(e) =>
        setEditingUser({ ...editingUser, departmentClubRole: e.target.value })
      }
      className="w-40 border p-2 rounded"
      disabled={!editingUser?.departmentClub}
    >
      <option value="">Select Role</option>
      {clubRoles.map((role) => (
        <option key={role} value={role}>
          {role}
        </option>
      ))}
    </select>
  </div>
</div>
<div className="mb-4">
  <label className="block text-sm font-medium mb-1">Social Club</label>
  <div className="flex space-x-2">
    <select
      value={editingUser?.socialClub || ''}
      onChange={(e) =>
        setEditingUser({ ...editingUser, socialClub: e.target.value })
      }
      className="w-full border p-2 rounded"
    >
      <option value="">Select Social Club</option>
      {socialClubs.map((club) => (
        <option key={club} value={club}>
          {club}
        </option>
      ))}
    </select>
    <select
      value={editingUser?.socialClubRole || ''}
      onChange={(e) =>
        setEditingUser({ ...editingUser, socialClubRole: e.target.value })
      }
      className="w-40 border p-2 rounded"
      disabled={!editingUser?.socialClub}
    >
      <option value="">Select Role</option>
      {clubRoles.map((role) => (
        <option key={role} value={role}>
          {role}
        </option>
      ))}
    </select>
  </div>
</div>
              <div className="col-span-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setIsEditModalOpen(false);
                    setEditingUser(null);
                  }}
                  className="px-4 py-2 bg-gray-200 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleUpdateUser}
                  className="px-4 py-2 bg-green-500 text-white rounded"
                >
                  Update
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