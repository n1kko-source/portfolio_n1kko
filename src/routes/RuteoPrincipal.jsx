import { Route, Routes } from "react-router-dom";


import { Hero } from "../components/Hero";

export const RuteoPrincipal = () => {
    return (
        <Routes>

             <Route path="/home" element={<Hero />}/>

            <Route path="/" element={<Error />} />
             <Route path="*" element={<Error />}/>

        </Routes>
    )
}