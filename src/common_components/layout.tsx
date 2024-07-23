import {Outlet} from "react-router-dom";

function Layout() {
    return (
        <div className="Layout">
            <div className="header_wrap">
                header
            </div>
            <div className="nav_wrap"></div>
            <div className="outlet_wrap">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
