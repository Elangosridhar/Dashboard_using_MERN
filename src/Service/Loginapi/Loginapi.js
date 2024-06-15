import axios  from "axios";
import apiurl from "../Apiendpoint/Apiendpoint";

export const apilogin = async (datas) =>{
    const res = await axios.post(`${apiurl()}/auth/apilogin`,datas)
    return res.data
}