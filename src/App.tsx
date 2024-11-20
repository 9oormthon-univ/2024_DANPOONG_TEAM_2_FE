import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { AuthProvider } from "./AuthContext";
import Home from "./routes/home";
import Layout from "./component/layout_navigation";
import Portfolio from "./routes/portfolio";
import Coupon from "./routes/coupon";
import InvestList from "./routes/invest_list";
import Return from "./routes/return";
import CouponSelect from "./routes/coupon_select";

import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    &::-webkit-scrollbar {
    display: none;
  }
  }

  #root {
    width: 100%;
    max-width: 360px;
    min-height: 640px;
    height: 100vh;
    border: 1px solid #ccc;
    background: #FAFAFA;
  }
`;
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "portfolio", element: <Portfolio /> },
      {
        path: "/invest-list",
        element: <InvestList />,
      },
    ],
  },
  {
    path: "/coupon",
    element: <Coupon />,
  },
  { path: "/return/:invest_id", element: <Return /> },
  { path: "/coupon_select", element: <CouponSelect /> },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
function App() {
  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
