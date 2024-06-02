import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
// import { AuthContext } from "./AuthProviders";


        const useAuthHook = () => {
        const all = useContext(AuthContext);
        return all;
        };

export default useAuthHook;