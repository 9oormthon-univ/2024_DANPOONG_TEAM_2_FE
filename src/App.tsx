import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { AuthProvider } from "./AuthContext";
import reset from "styled-reset";
import MapPage from "./pages/mapPage/MapPage";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Layout from "./component/layout_navigation";
import Portfolio from "./routes/portfolio";
import Coupon from "./routes/coupon";
import InvestList from "./routes/invest_list";
import Return from "./routes/return";
import CouponSelect from "./routes/coupon_select";

import Home from "./routes/home";
import ProjectDetailPage from "./pages/projectDetailPage/ProjectDetailPage";
import FundingSuccessPage from "./component/fundingSuccess/FundingSuccess";
import Category from "./routes/category";

const GlobalStyles = createGlobalStyle`
  ${reset}

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

  a {
    text-decoration: none;
	  color: inherit;

    &:hover {
        text-decoration: none;
      color: none;
    }
      
    &:active {
        text-decoration: none;
      color: black;
    }
          
    &:visited {
        text-decoration: none;
      color: black;
    }
          
    &:link {
        text-decoration: none;
      color: black; 
    }
  }
  button {
    background: inherit; 
    border:none; 
    box-shadow:none; 
    border-radius:0; 
    padding:0; 
    overflow:visible; 
    cursor:pointer;
    &:focus {
      outline:none
    }
  }
`;
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "category", element: <Category />},
      {
        path: "/invest-list",
        element: <InvestList />,
      },
      { path: "/map", element: <MapPage /> },
      { path: "/map/:id", element: <ProjectDetailPage /> },
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
  {
    path: "/fundingSuccess",
    element: <FundingSuccessPage />,
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
