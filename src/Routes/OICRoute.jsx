import PendingTransaction from "../Pages/PendingTransaction/PendingTransaction"
import ApprovedTransaction from "../Pages/ApprovedTransactions/ApprovedTransactions"
import DeclinedTransaction from "../Pages/DeclinedTransactions/DeclinedTransactions"
import OICDash from "../Pages/OICDashboard/OICDashboard"
import OICTransaction from "../Pages/OICTransaction/OICTransaction"



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
const OICTransactionRoute = {
  path: "/oic/transactions",
  element:  <OICTransaction/>
}
export {PendingTransactionRoute, ApprovedTransactionRoute,DeclinedTransactionRoute,OICDashboardRoute,OICTransactionRoute}
