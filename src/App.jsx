import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginUserRoute, RegisterUserRoute,FirstTimeLoginRoute,ForgotPasswordRoute,NotFoundRoute} from './Routes/LoginRoute';
import { AdminDashboardRoute, StudentListRoute, PersonnelListRoute, OICListRoute, OfficerListRoute,CoursesAndDepartmentListRoute,StudentManagementRoute,PersonnelManagementRoute,OicMangementRoute,UserListRoute,ClubListRoute,OICDashRoute} from './Routes/AdminRoute';
import { UserDashboardRoute, UserDocumentTrackingRoute, UserEClearanceRoute, UserDTTransactionRoute, LandingPageRoute,ModeratorDashboardRoute,ModeratorTransactionRoute,PersonnelEClearanceRoute } from './Routes/UserRoute';
import { ECRoute, ECOICRoute, ECMTRoute, OFORoute,PECRoute,PECMTRoute } from './Routes/DTECRoute';
import { ILICRoute, ILOCRoute, CLICRoute, CLOCRoute,BPRoute } from './Routes/LettersRoute';
import { PendingTransactionRoute,ApprovedTransactionRoute,DeclinedTransactionRoute, OICDashboardRoute, OICTransactionRoute} from './Routes/OICRoute';
import { WebSocketProvider } from './services/websocket/WebSocketProvider';
import WebSocketStatus from './Components/common/WebSocketStatus';

const router = createBrowserRouter([
  LoginUserRoute,
  PECRoute,
  NotFoundRoute,
  RegisterUserRoute,
  PECMTRoute,
  FirstTimeLoginRoute,
  ModeratorDashboardRoute,
  ModeratorTransactionRoute,
  PersonnelEClearanceRoute,
  ForgotPasswordRoute,
  UserDashboardRoute,
  UserDocumentTrackingRoute,
  OICTransactionRoute,
  UserDTTransactionRoute,
  UserEClearanceRoute,
  ECRoute,
  ECOICRoute,
  ECMTRoute,
  ILICRoute,
  ILOCRoute,
  CLICRoute,
  CLOCRoute,
  LandingPageRoute,
  OFORoute,
  AdminDashboardRoute,
  StudentListRoute,
  PersonnelListRoute,
  OICListRoute,
  OfficerListRoute,
  CoursesAndDepartmentListRoute,
  StudentManagementRoute,
  PersonnelManagementRoute,
  OicMangementRoute,
  UserListRoute,
  ClubListRoute,
  OICDashRoute,
  PendingTransactionRoute,
  ApprovedTransactionRoute,
  DeclinedTransactionRoute,
  OICDashboardRoute,
  BPRoute
]);

export default function App() {
  return (
    <WebSocketProvider>
      <RouterProvider router={router} />
      <WebSocketStatus />
    </WebSocketProvider>
  );
}