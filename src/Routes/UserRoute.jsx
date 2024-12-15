import UserDashboard from "../Pages/UserDashBoard/UserDashBoard"
import UserDocumentTracking from "../Pages/UserDocumentTracking/UserDocumentTracking"
import UserEClearance from "../Pages/UserE-Clearance/UserE-Clearance"
import UserDTTransactions from "../Pages/UserDTTransactions/UserDTTransactions"
import LandingPage from "../Pages/LandingPage/LandingPage"
import ModeratorDashboard from "../Pages/ModeratorDashboard/ModeratorDashboard"
import ModeratorTransaction from "../Pages/ModeratorTransaction/ModeratorTransaction"
import PersonnelEClearance from "../Pages/PersonnelClearance/PersonnelClearance"


const UserDashboardRoute = {
  path: "/user/dashboard",
  element:  <UserDashboard/>
}
const UserDocumentTrackingRoute = {
  path: "/user/document-tracking",
  element:  <UserDocumentTracking/>
}
const UserDTTransactionRoute = {
  path: "/user/document-tracking-transactions",
  element:  <UserDTTransactions/>
}
const UserEClearanceRoute = {
  path: "/user/e-clearance",
  element:  <UserEClearance/>
}
const LandingPageRoute = {
  path: "/",
  element:  <LandingPage/>
}

const PersonnelEClearanceRoute = {
  path: "/personnel/e-clearance",
  element:  <PersonnelEClearance/>
}

const ModeratorDashboardRoute = {
  path: "/moderator/dashboard",
  element:  <ModeratorDashboard/>
}
const ModeratorTransactionRoute = {
  path: "/moderator/transaction",
  element:  <ModeratorTransaction/>
}
export {UserDashboardRoute,UserDocumentTrackingRoute,UserEClearanceRoute,UserDTTransactionRoute,LandingPageRoute,ModeratorDashboardRoute,ModeratorTransactionRoute,PersonnelEClearanceRoute}
