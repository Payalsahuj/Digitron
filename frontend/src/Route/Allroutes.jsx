import { Route, Routes } from "react-router-dom";
import { Welcome } from "../Pages/Welcome";
import { Registration } from "../Pages/Registration";
import { Login } from "../Pages/Login";
import { Dashboard } from "../Pages/Dashboard";

import { StudyMaterial } from "../Pages/StudyMaterial";

import QandA from "../Pages/QandA";
import { DigitalInterview } from "../Pages/Digitalinterview";
import { PrivateRoute } from "./Privateroute";
import { Progress } from "../Pages/progress";

export function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Registration/>}/>
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/material" element={<PrivateRoute><StudyMaterial /></PrivateRoute>} />
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/qa" element={<PrivateRoute><QandA /></PrivateRoute>}></Route>
      <Route path="/progress" element={<PrivateRoute><Progress/></PrivateRoute>}/>
      <Route path="/interview" element={<PrivateRoute><DigitalInterview /></PrivateRoute>} />
    </Routes>
  );
}
