import EC from "../Pages/EClearancePage/EClearancePage"
import PEC from "../Pages/PersonnelClearanceForm/PersonnelClearanceForm"
import ECOIC from "../Pages/EClearanceOICPage/EClearanceOICPage"
import ECMT from "../Pages/EClearanceTransaction/EClearanceTransaction"
import PECMT from "../Pages/PersonnelClearanceTracking/PersonnelClearanceTracking"
import OFO from "../Pages/OsaFormOfficer/OsaFormOfficer"

const ECRoute = {
  path: "/user/clearance-form",
  element:  <EC/>
}
const PECRoute = {
  path: "/personnel/clearance-form",
  element:  <PEC/>
}
const ECMTRoute = {
  path: "/user/my-transactions",
  element:  <ECMT/>
}
const PECMTRoute = {
  path: "/personnel/my-transactions",
  element:  <PECMT/>
}
const ECOICRoute = {
  path: "/admin/clearance-form",
  element:  <ECOIC/>
}
const OFORoute = {
  path: "/user/OSA-form-officer",
  element:  <OFO/>
}

export {ECRoute,ECOICRoute,ECMTRoute,OFORoute,PECRoute,PECMTRoute}
