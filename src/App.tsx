import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { AuthProvider } from "./AuthContext";
import Home from "./routes/home";
import Layout from "./component/layout_navigation";
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
  }

  #root {
    width: 360px;
    height: 640px;
    border: 1px solid #ccc;
    background: #FAFAFA;
  }
`;
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "", element: <Home /> }],
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
