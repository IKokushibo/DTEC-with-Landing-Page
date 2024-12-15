// Sample data for all letter types
export const mockLetters = [
  {
    id: "LTR001",
    dateRequested: "2024-01-15 09:30 AM",
    transactionType: "Document/Letter Request",
    nameOfTransaction: "Communication Letter (In Campus)",
    requestedBy: "Computer Society",
    transactionStatus: "For Evaluation",
    lastUpdatingDate: "2024-01-15 09:30 AM",
    content: {
      organizationName: "Computer Society",
      activityName: "Tech Week 2024",
      semester: "1st Semester, A.Y. 2024-2025",
      title: "Request for Venue Reservation",
      date: "January 25, 2024",
      letterContent: "Dear Rev. Fr. Jessie P. Pasquin, DCC,\n\nI am writing to request permission to conduct our annual Tech Week event at the College Auditorium. The event will showcase the latest technological innovations and provide hands-on workshops for our students.\n\nWe believe this event will greatly benefit our students by exposing them to current industry trends and practices.\n\nThank you for your consideration.\n\nRespectfully yours,"
    }
  },
  {
    id: "LTR002",
    dateRequested: "2024-01-14 02:15 PM",
    transactionType: "Document/Letter Request",
    nameOfTransaction: "Communication Letter (Off Campus)",
    requestedBy: "Engineering Society",
    transactionStatus: "For Evaluation",
    lastUpdatingDate: "2024-01-14 02:15 PM",
    content: {
      organizationName: "Engineering Society",
      activityName: "Industry Visit 2024",
      semester: "1st Semester, A.Y. 2024-2025",
      title: "Request for Industry Visit Permission",
      date: "January 30, 2024",
      letterContent: "Dear Rev. Fr. Daryll Dhan L. Bilbao, DCC,\n\nThe Engineering Society would like to request permission for an industry visit to Tech Solutions Inc. This visit aims to provide our students with practical exposure to industrial processes and professional work environments.\n\nThe company has agreed to host our students and provide a comprehensive tour of their facilities.\n\nThank you for your consideration.\n\nRespectfully yours,"
    }
  },
  {
    id: "LTR003",
    dateRequested: "2024-01-13 11:20 AM",
    transactionType: "Document/Letter Request",
    nameOfTransaction: "Implementation Letter (In Campus)",
    requestedBy: "IEEE Student Branch",
    transactionStatus: "For Evaluation",
    lastUpdatingDate: "2024-01-13 11:20 AM",
    content: {
      organizationName: "IEEE Student Branch",
      activityName: "Technical Workshop Series",
      semester: "1st Semester, A.Y. 2024-2025",
      title: "Advanced Programming Workshop",
      dateTime: "January 20, 2024 2:00 PM",
      venue: "Computer Laboratory 1",
      participants: "BSCS Students",
      rationale: "• To enhance programming skills of BSCS students\n• To provide hands-on experience with industry-standard tools\n• To prepare students for future career opportunities",
      objectives: "• Improve coding practices and standards\n• Learn new programming technologies\n• Develop problem-solving skills\n• Create practical applications",
      sourcesOfFund: "• Organization funds - ₱5,000\n• Registration fees - ₱3,000\n• Department allocation - ₱2,000",
      projectedExpenses: "• Materials and handouts - ₱3,000\n• Refreshments - ₱2,000\n• Certificates - ₱1,000\n• Workshop materials - ₱4,000",
      expectedOutput: "• Skilled participants in advanced programming\n• Project outputs and documentation\n• Certificates of completion\n• Workshop documentation"
    }
  },
  {
    id: "LTR004",
    dateRequested: "2024-01-12 03:45 PM",
    transactionType: "Document/Letter Request",
    nameOfTransaction: "Implementation Letter (Off Campus)",
    requestedBy: "Community Service Club",
    transactionStatus: "For Evaluation",
    lastUpdatingDate: "2024-01-12 03:45 PM",
    content: {
      organizationName: "Community Service Club",
      activityName: "Digital Literacy Program",
      semester: "1st Semester, A.Y. 2024-2025",
      title: "Digital Literacy for Senior Citizens",
      dateTime: [
        "January 25, 2024 9:00 AM",
        "January 26, 2024 9:00 AM",
        "January 27, 2024 9:00 AM"
      ],
      venue: "Barangay San Lorenzo Community Center",
      participants: "Senior Citizens of Barangay San Lorenzo",
      rationale: "• To bridge the digital divide in our community\n• To help senior citizens adapt to modern technology\n• To promote intergenerational learning",
      objectives: "• Teach basic computer operations\n• Introduce internet safety\n• Facilitate digital communication\n• Enable online service access",
      sourcesOfFund: "• Club funds - ₱10,000\n• LGU support - ₱5,000\n• Sponsorships - ₱5,000",
      projectedExpenses: "• Training materials - ₱8,000\n• Refreshments - ₱5,000\n• Transportation - ₱4,000\n• Certificates - ₱3,000",
      expectedOutput: "• Trained senior citizens in basic computer use\n• Digital literacy certificates\n• Community engagement documentation\n• Impact assessment report",
      activities: [
        {
          activity: "Basic Computer Operations Training",
          objective: "Teach basic computer usage skills to participants",
          output: "Senior citizens proficient in using computers",
          committee: "Training and Facilitation Team"
        },
        {
          activity: "Internet Safety Workshop",
          objective: "Educate participants on how to stay safe online",
          output: "Participants aware of online safety practices",
          committee: "Cybersecurity Awareness Team"
        },
        {
          activity: "Digital Communication Training",
          objective: "Enable participants to communicate using digital tools",
          output: "Participants proficient in email and messaging apps",
          committee: "Communication and Media Team"
        },
        {
          activity: "Accessing Online Services",
          objective: "Guide participants in using online government and social services",
          output: "Participants able to access key online services independently",
          committee: "Support Services Team"
        }
      ],
      programFlow: [
        {
          time: "1:20 - 1:30 PM",
          activity: "Arrival"
        },
        {
          time: "1:30 - 1:45 PM",
          activity: "Invocation"
        },
        {
          time: "1:45 - 2:20 PM",
          activity: "Story Telling"
        },
        {
          time: "2:20 - 2:45 PM",
          activity: "Distribution of School Supplies"
        },
        {
          time: "2:45 - 3:00 PM",
          activity: "Parlor Games"
        }
      ]
    }
  },
  {
    id: "LTR005",
    dateRequested: "2024-01-11 10:30 AM",
    transactionType: "Document/Letter Request",
    nameOfTransaction: "Budget Proposal",
    requestedBy: "Technology Club",
    transactionStatus: "For Evaluation",
    lastUpdatingDate: "2024-01-11 10:30 AM",
    content: {
      organizationName: "Technology Club",
      activityName: "Annual Technology Fair 2024",
      semester: "1st Semester, A.Y. 2024-2025",
      title: "Budget Proposal for Tech Fair",
      date: "February 15, 2024",
      venue: "College Gymnasium",
      participants: "All IT and Engineering Students",
      rationale: "• To showcase student innovations\n• To promote technological advancement\n• To facilitate industry networking",
      objectives: "• Display student projects\n• Host tech talks\n• Conduct workshops\n• Facilitate networking",
      sourceOfFund: "Student Organization Fund",
      amountAllotted: "25000",
      expenses: [
        { item: "Venue Setup and Decoration", amount: "5000" },
        { item: "Technical Equipment Rental", amount: "8000" },
        { item: "Promotional Materials", amount: "3000" },
        { item: "Refreshments", amount: "4000" },
        { item: "Certificates and Materials", amount: "2000" },
        { item: "Honorarium for Speakers", amount: "3000" }
      ],
      expectedOutput: "• Successful tech fair execution\n• Student project showcase\n• Industry connections\n• Event documentation",
    }
  }
];
export const mockClearances = [
  {
    id: 1,
    studentName: "Torres, Christian James V.",
    yearLevel: "4th-year",
    course: "BSCS",
    semester: "First Semester",
    academicYear: "2024-2025",
    dateRequested: "2024-01-15",
    office: "Guidance In-Charge",
    status: "In Progress",
    notes: "",
    dateCompleted: null
  },
  {
    id: 2,
    studentName: "Smith, John D.",
    yearLevel: "3rd-year",
    course: "BSIT",
    semester: "First Semester",
    academicYear: "2024-2025",
    dateRequested: "2024-01-14",
    office: "Guidance In-Charge",
    status: "Approved",
    notes: "All requirements complete",
    dateCompleted: "2024-01-16"
  }
  // Add more mock data as needed
];

