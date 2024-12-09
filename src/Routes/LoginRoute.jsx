import LoginUser from "../Pages/LoginPage/UserLoginPage"
import RegisterPage from "../Pages/RegisterPage/RegisterPage"
import FirstTimeLoginPage from "../Pages/FirstTimeLogin/FirstTimeLogin"
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword"
import NotFound from "../Pages/404/404"



const LoginUserRoute = {
  path: "/login-user",
  element:  <LoginUser/>
}
const RegisterUserRoute = {
  path: "/register-user",
  element:  <RegisterPage/>
}
const FirstTimeLoginRoute = {
  path: "/first-time-login",
  element:  <FirstTimeLoginPage/>
}
const ForgotPasswordRoute = {
  path: "/forgot-password",
  element:  <ForgotPassword/>
}
const NotFoundRoute = {
  path: "/404-not-found",
  element:  <NotFound/>
}
export {LoginUserRoute, RegisterUserRoute,FirstTimeLoginRoute,ForgotPasswordRoute,NotFoundRoute}
