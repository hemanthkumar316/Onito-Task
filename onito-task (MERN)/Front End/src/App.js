import React from "react";
import Form from "./Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataTable from "./DataTable";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route exact path="/DataTable" element={<DataTable />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
