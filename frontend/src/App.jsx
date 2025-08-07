import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import AdminPage from "./pages/adminPage";
import TestPage from "./pages/testPage";
import LoginPage from "./pages/loginpage";
import { Toaster } from "react-hot-toast";
import RegisterPage from "./pages/registerPage";
import ClientPage from "./pages/client/clientPage";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen w-full flex justify-center items-center">
        <Toaster position="top-center" />
        <Routes path="/">
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/admin/*" element={<AdminPage />}></Route>
          <Route path="/test" element={<TestPage />}></Route>
          <Route path="/*" element={<ClientPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
