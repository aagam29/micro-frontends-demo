import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DoctorList from "./components/DoctorList";
import DoctorProfile from "doctorProfileApp/src/components/DoctorProfile";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./index.scss";
const App = () => (
  <BrowserRouter>
    <div className="h-screen flex flex-col bg-gray-900">
      <Header />
      <div className="my-8 flex-1 flex">
        <Routes>
          <Route path="/" exact element={<DoctorList />} />
          <Route path="/doctor/:id" element={
            <div className="flex flex-1 items-center justify-center">
              <DoctorProfile />
            </div>
          } />
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));

