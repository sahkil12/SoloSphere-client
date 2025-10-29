import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Auth/useAuth";
import Loader from "../Components/Loader";

const PrivateRoute = ({children}) => {
   const { user, loading } = useAuth()
   const location = useLocation()
   if(loading){
    return <Loader></Loader>
   }
   if(!user){
    return <Navigate to={'/login'} state={location.pathname} replace={history}></Navigate>
   }
   return children 
};

export default PrivateRoute;