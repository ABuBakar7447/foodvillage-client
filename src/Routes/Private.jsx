import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({children}) => {
    const location = useLocation();


    const {user, loading} = useContext(AuthContext)
    if(loading){
        return(
            <div className="w-1/2 mx-auto h-56">
                <progress className="progress w-56"></progress>
            </div>
        )
    }

    if(user){
        return children;
    }
    return ( <Navigate to="/login"  state={{from: location}} replace></Navigate>);
};

export default Private;