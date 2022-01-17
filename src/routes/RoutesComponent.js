import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../views/Home/Home";
import Result from "../views/Result/Result"
import Detail from "../views/Detail/Detail"


export default function RoutesComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />

                <Route path="/result" element={<Result/>} />
                <Route path="/detail" element={<Detail/>} />

            </Routes>

        </BrowserRouter>
    )




}