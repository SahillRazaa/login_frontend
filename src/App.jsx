import React from "react";
import LoginPage from "./LoginPage";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from "./Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<LoginPage/>} />
        <Route path = "/user/:username" element = {<Dashboard/>} />
      </Routes>
    </Router>
  );
};

export default App;
