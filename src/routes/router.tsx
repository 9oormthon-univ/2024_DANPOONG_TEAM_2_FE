// src/routes/router.tsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "../component/layout_navigation";
import Home from "./home";
import Portfolio from "./portfolio";
import InvestList from "./invest_list";
import MapPage from "../pages/mapPage/MapPage";
import ProjectDetailPage from "../pages/projectDetailPage/ProjectDetailPage";
import Coupon from "./coupon";
import CouponSelect from "./coupon_select";
import Return from "./return";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import StepMemberType from "../component/Signup/StepMemberType";
import FundingSuccessPage from "../component/fundingSuccess/FundingSuccess";
import Category from "./category";
import Mypage from "../pages/mypage/Mypage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/home",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "invest-list", element: <InvestList /> },
      { path: "map", element: <MapPage /> },
      { path: "map/:id", element: <ProjectDetailPage /> },
      { path: "map/:id", element: <ProjectDetailPage /> },
      { path: "category", element: <Category /> },
      { path: "/invest-list", element: <InvestList /> },
      { path: "/map", element: <MapPage /> },
      { path: "/map/:id", element: <ProjectDetailPage /> },
      { path: "/map/:id", element: <ProjectDetailPage /> },
      { path: "/category", element: <Category />},
      { path: "/mypage" , element: <Mypage />},
    ],
  },
  { path: "/coupon", element: <Coupon /> },
  { path: "/return/:invest_id", element: <Return /> },
  { path: "/coupon_select", element: <CouponSelect /> },
  { path: "/signup", element: <Signup /> },
  { path: "/select-member-type", element: <StepMemberType /> },
  { path: "/fundingSuccess", element: <FundingSuccessPage /> },
]);

export default router;
