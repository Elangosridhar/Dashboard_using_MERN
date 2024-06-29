import { Navigate } from "react-router-dom";
import useauthendication from "../../../hooks/useauthendication"

export default function ProtectedRout(props) {
  const {children,role} = props
const {IsloggedIn}= useauthendication();
if (!IsloggedIn){
    return <Navigate to={'/'} />
}else{
  return children;
}
  
}
