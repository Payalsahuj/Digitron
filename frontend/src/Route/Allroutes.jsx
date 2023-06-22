import { Route, Routes } from "react-router-dom";
import { Welcome } from "../Pages/Welcome";


export function Allroutes(){
    return <Routes>
        <Route path="/" element={<Welcome/>}/>
    </Routes>
}