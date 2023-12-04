
import { Navigate, useLocation } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
import { useContext } from "react";
import{ AuthContext } from "../Provider/AuthProvider";

const Private = ({children}) => {
    const location = useLocation();


    const {user, loading} = useContext(AuthContext)
    // console.log(user, "loading:",loading)
    
    if(loading){
        return(
            <div className="w-1/2 mx-auto h-56 flex justify-center items-center">
                <progress className="progress w-56"></progress>
            </div>
        )
    }
    

    if(user){
        return children;
    }

    
    return ( <Navigate to="/login"  state={{from: location}} replace true></Navigate> );

    
};

export default Private;