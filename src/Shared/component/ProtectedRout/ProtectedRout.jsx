import { Navigate } from "react-router-dom";
import useauthendication from "../../../hooks/useauthendication"

export default function ProtectedRout({childeren}) {
const {IsloggedIn}= useauthendication();
if (!IsloggedIn){
    return <Navigate to={'/'} />
}
  return childeren;
}
