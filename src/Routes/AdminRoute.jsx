import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({children}) => {
    const location = useLocation();


    const {user, loading} = useAuth();
    const [isAdmin,isAdminLoading] = useAdmin();


    if(loading || isAdminLoading){
        return(
            <div className="w-1/2 mx-auto h-56">
                <progress className="progress w-56"></progress>
            </div>
        )
    }

    if(user && isAdmin){
        return children;
    }
    return ( <Navigate to="/"  state={{from: location}} replace></Navigate>);
};

export default AdminRoute;