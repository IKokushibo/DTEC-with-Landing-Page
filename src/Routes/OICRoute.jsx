import PendingTransaction from "../Pages/PendingTransaction/PendingTransaction"
import ApprovedTransaction from "../Pages/ApprovedTransactions/ApprovedTransactions"
import DeclinedTransaction from "../Pages/DeclinedTransactions/DeclinedTransactions"
import OICDash from "../Pages/OICDashboard/OICDashboard"


const PendingTransactionRoute = {
  path: "/oic/pending-transaction",
  element:  <PendingTransaction/>
}
const ApprovedTransactionRoute = {
  path: "/oic/approved-transaction",
  element:  <ApprovedTransaction/>
}
const DeclinedTransactionRoute = {
  path: "/oic/declined-transaction",
  element:  <DeclinedTransaction/>
}
const OICDashboardRoute = {
  path: "/oic/dashboard",
  element:  <OICDash/>
}
export {PendingTransactionRoute, ApprovedTransactionRoute,DeclinedTransactionRoute,OICDashboardRoute}
