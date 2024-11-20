import { Route, Routes } from "react-router-dom";

import Main from "../components/dashboard/main";
import Dashboard from "../pages/dashboard";
// import Dashboard from "../components/dashboard";
import Student from "../components/dashboard/students";
import Chanel from "../components/dashboard/chanel";
const Root = () => {
  return (
    <>
      <Routes>
 
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="main" element={<Main />} />
          <Route path="students" element={<Student />} />
          <Route path="chanel" element={<Chanel />} />
        </Route>
      </Routes>
    </>
  );
};

export default Root;

