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
import FundingSuccessPage from "../pages/fundingSuccessPage/FundingSuccessPage";
import Category from "./category";
import Mypage from "../pages/mypage/Mypage";
import Change from "./change";
import ChangeFinish from "./change_finish";
import { path } from "framer-motion/client";
import MyInterestValue from "../pages/mypage/MyInterestValue";
import MyScrap from "../pages/mypage/MyScrap";

const router = createBrowserRouter([
  { path: "/", element: <Login /> }, // 로그인 페이지
  {
    path: "/home",
    element: <Layout />,
    children: [{ path: "", element: <Home /> }],
  }, // 홈
  {
    path: "/category",
    element: <Layout />,
    children: [{ path: "", element: <Category /> }],
  }, // 카테고리
  {
    path: "/portfolio",
    element: <Layout />,
    children: [{ path: "", element: <Portfolio /> }],
  }, // 포트폴리오
  {
    path: "/map",
    element: <Layout />,
    children: [{ path: "", element: <MapPage /> }],
  }, // 지도
  {
    path: "/mypage",
    element: <Layout />,
    children: [
      { path: "", element: <Mypage /> },
      { path: "social-value", element: <MyInterestValue /> },
      { path: "scrap", element: <MyScrap /> },
    ],
  }, // 마이페이지
  {
    path: "/map/:id",
    element: <Layout />,
    children: [{ path: "", element: <ProjectDetailPage /> }],
  }, // 프로젝트 상세 페이지
  { path: "/coupon", element: <Coupon /> }, // 쿠폰
  { path: "/invest-list", element: <InvestList /> }, //투자관리
  { path: "/change", element: <Change /> },
  { path: "/change_finish", element: <ChangeFinish /> },
  { path: "/return/:id", element: <Return /> }, // 반환
  { path: "/coupon_select", element: <CouponSelect /> }, // 쿠폰 선택
  { path: "/signup", element: <Signup /> }, // 회원가입
  { path: "/select-type", element: <StepMemberType /> }, // 회원 유형 선택
  { path: "/fundingSuccess", element: <FundingSuccessPage /> }, // 펀딩 성공 페이지
]);

export default router;
