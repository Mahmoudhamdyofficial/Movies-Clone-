import { Outlet } from "react-router-dom";
import Header from "../header";
import { useSelector } from 'react-redux'
function Applayout() {
    const Lang = useSelector((state) => { return state.language.language });
    return (
        <div dir={Lang=="en"?"ltr":"rtl"}>
            <Header />
            <Outlet />
        </div>
    );
}

export default Applayout;