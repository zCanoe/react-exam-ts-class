import {useLocation} from "react-router-dom";
import {RouterKeys, routersData} from "@/config";

function useIsShowMenu() {
   const location = useLocation();

   const key: RouterKeys = location.pathname.split("/")[1] as any as RouterKeys;

   return routersData[key].hasMenu;
}

export default useIsShowMenu;
