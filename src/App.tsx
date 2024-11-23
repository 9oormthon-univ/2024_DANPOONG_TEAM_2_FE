import { createGlobalStyle } from "styled-components";
import { AuthProvider } from "./AuthContext";
import reset from "styled-reset";

import { RouterProvider } from "react-router-dom";
import router from "./routes/router"; // router 그대로 가져옴
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
