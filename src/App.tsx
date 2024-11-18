import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { AuthProvider } from "./AuthContext";
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
    overflow: hidden;
    background-color: black;
  }

  #root {
    width: 360px;
    height: 640px;
    background-color: white;
    border: 1px solid #ccc;
  }
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <main />,
  },
]);
function App() {
  return (
    <div>
      <GlobalStyles>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </GlobalStyles>
    </div>
  );
}

export default App;
