import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginUserRoute, RegisterUserRoute,FirstTimeLoginRoute,ForgotPasswordRoute,NotFoundRoute} from './Routes/LoginRoute';
import { AdminDashboardRoute, StudentListRoute, PersonnelListRoute, OICListRoute, OfficerListRoute,CoursesAndDepartmentListRoute,StudentManagementRoute,PersonnelManagementRoute,OicMangementRoute,UserListRoute,ClubListRoute,OICDashRoute} from './Routes/AdminRoute';
import { UserDashboardRoute, UserDocumentTrackingRoute, UserEClearanceRoute, UserDTTransactionRoute, LandingPageRoute } from './Routes/UserRoute';
import { ECRoute, ECOICRoute, ECMTRoute, OFORoute } from './Routes/DTECRoute';
import { ILICRoute, ILOCRoute, CLICRoute, CLOCRoute } from './Routes/LettersRoute';
import { PendingTransactionRoute,ApprovedTransactionRoute,DeclinedTransactionRoute, OICDashboardRoute, } from './Routes/OICRoute';
import { WebSocketProvider } from './services/websocket/WebSocketProvider';
import WebSocketStatus from './Components/common/WebSocketStatus';

const router = createBrowserRouter([
  LoginUserRoute,
  NotFoundRoute,
  RegisterUserRoute,
  FirstTimeLoginRoute,
  ForgotPasswordRoute,
  UserDashboardRoute,
  UserDocumentTrackingRoute,
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
]);

export default function App() {
  return (
    <WebSocketProvider>
      <RouterProvider router={router} />
      <WebSocketStatus />
    </WebSocketProvider>
  );
}