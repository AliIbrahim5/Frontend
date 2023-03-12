import { ChakraProvider, theme } from "@chakra-ui/react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import TodoHome from "./pages/TodoHome";
import Nav from "../src/components/nav/Nav";
export const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Nav />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<TodoHome />} />
          </Route>
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
};
