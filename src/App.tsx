import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { AuthProvider } from "./AuthContext";
import Home from "./routes/home";
import Layout from "./component/layout_navigation";
import Portfolio from "./routes/portfolio";
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
      { path: "/portfolio", element: <Portfolio /> },
    ],
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
