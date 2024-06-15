import {create} from "zustand";
const useauthendication = create((set) =>({
   IsloggedIn:localStorage.getItem("access_token")!=null?true:false,
   settoken:(token) =>set((state)=>{
    console.log(token);
    localStorage.setItem("access_token", token);
    return{IsloggedIn:true}
    
   }),
   gettoken:() =>set((state)=>{
      localStorage.removeItem("access_token");
      return{IsloggedIn:false}
      
     })  
}))


export default useauthendication;