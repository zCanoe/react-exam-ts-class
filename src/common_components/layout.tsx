import {Outlet} from "react-router-dom";
import Header from "@/common_components/header";
import Menu from "@/common_components/menu";
import useIsShowMenu from "@/hooks/useIsShowMenu";

function Layout() {
    const isShowMenu = useIsShowMenu();
    return (
        <div className="Layout">
            <div className="header_wrap">
                <Header />
            </div>
            <div className="nav_wrap">
                { isShowMenu ? <Menu /> : null }
            </div>
            <div className="outlet_wrap">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
