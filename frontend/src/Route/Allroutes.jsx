import { Route, Routes } from "react-router-dom";
import { Welcome } from "../Pages/Welcome";
import { Registration } from "../Pages/Registration";
import { Login } from "../Pages/Login";
import { Dashboard } from "../Pages/Dashboard";

import { StudyMaterial } from "../Pages/StudyMaterial";

import QandA from "../Pages/QandA";
import { DigitalInterview } from "../Pages/Digitalinterview";

export function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/material" element={<StudyMaterial />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/qa" element={<QandA />}></Route>
      <Route path="/interview" element={<DigitalInterview />} />
    </Routes>
  );
}
