import axios  from "axios";
import apiurl from "../Apiendpoint/Apiendpoint";

export const apiemployee = async (datas) =>{
    const res = await axios.post(`${apiurl()}/auth/apiemployee`,datas)
    return res.data
}

export const  getemployees = async () => {
    const res = await axios.get(`${apiurl()}/employees/getemployees`,)
    return res.data
}

export const updateemployee = async (datas) => {
    const res = await axios.put(`${apiurl()}/employees/updateemployee`,datas)
    return res.data
}

export const deleteemployee = async (_id) => {
    console.log(_id)
    const res = await axios.delete(`${apiurl()}/employees/deleteemployee`,{  params:{_id:_id}})
    return res.data
}