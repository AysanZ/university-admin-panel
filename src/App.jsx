import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Student from "./pages/StudentList/Student";
import StudentView from "./pages/StudentView/StudentView";
import StudentAdd from "./pages/StudentAdd/StudentAdd";
import StudentEdit from "./pages/StudentEdit/StudentEdit";


const App = () => {
  return (
    <div id="dashboard">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="student-list" element={<Student />} />
            <Route path="student-view" element={<StudentView />} />
            <Route path="student-add" element={<StudentAdd />} />
            <Route path="student-edit" element={<StudentEdit />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
