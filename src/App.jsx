import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landing from "./Views/Landing";
import ExamplePath from "./Views/ExamplePath";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/path" element={<ExamplePath />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
