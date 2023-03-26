import React from "react";
import "./App.css";

// Personal component imports
import Home from "./components/Home/Home";

// Outside Libraries
import '@fontsource/karla'
import '@fontsource/hanken-grotesk'
import '@fontsource/lato'
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/*",
    element: <Navigate to="/" />,
  },
]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
