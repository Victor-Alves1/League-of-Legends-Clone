import { Route, Routes } from "react-router-dom";
import LoginScreen from "./LoginScreen/LoginScreen"
import { Laucher } from "./Laucher/Laucher"

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<LoginScreen />}/>
            <Route path="/:slug" element={<Laucher />}/>
        </Routes>
    )
}