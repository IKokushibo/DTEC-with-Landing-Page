import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {LoginUserRoute}  from './Routes/LoginRoute';
import {UserDashboardRoute,UserDocumentTrackingRoute,UserEClearanceRoute,UserDTTransactionRoute,LandingPageRoute} from  './Routes/UserRoute';
import {ECRoute,ECOICRoute,ECMTRoute} from  './Routes/DTECRoute';
import {ILICRoute,ILOCRoute,CLICRoute,CLOCRoute} from  './Routes/LettersRoute';

const router =  createBrowserRouter([
  LoginUserRoute,
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
]);



export  default function App() {
  return (
    <RouterProvider  router={router} />
    );
 }

