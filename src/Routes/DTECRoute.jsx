import EC from "../Pages/EClearancePage/EClearancePage"
import ECOIC from "../Pages/EClearanceOICPage/EClearanceOICPage"
import ECMT from "../Pages/EClearanceTransaction/EClearanceTransaction"

const ECRoute = {
  path: "/user/clearance-form",
  element:  <EC/>
}
const ECMTRoute = {
  path: "/user/my-transactions",
  element:  <ECMT/>
}
const ECOICRoute = {
  path: "/admin/clearance-form",
  element:  <ECOIC/>
}

export {ECRoute,ECOICRoute,ECMTRoute}
