import {useLocation} from "react-router-dom";

function usePathKey() {
    const location = useLocation();

    return location.pathname.split("/")[1];
}

export default usePathKey;
