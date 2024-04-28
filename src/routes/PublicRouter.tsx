import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";

const PublicRouter = () => {
    return(
        <>
            <div>
                <div>Public</div>
                <Outlet/>
            </div>
        </>
    )
}