import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./utils/store.js";

import "./index.css";
import App from "./App.jsx";
import About from "./page/About.jsx";
import Register from "./auth/register2.jsx";

import Login from "./auth/login.jsx";

import Profile from "./auth/profile.jsx";

import BlogDetail from "./blogdetail/Datailblog.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
