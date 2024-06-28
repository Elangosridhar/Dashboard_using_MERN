import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/saga-blue/theme.css'; // Choose a theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { Dialog } from 'primereact/dialog';
import useauthendication from '../../hooks/useauthendication';

export default function TableandModel(props) {


const {handleChange,handleopen,togglePasswordVisibility,passwordVisible,loaddata,update,onClose,keys,setkeys,renderHeader,
  deletefun,Action,register,isOpen,onOpenChange,sno,type,data,deletepopup,filters,formdata,setdeletepopup,bool, setbool,deleteid,setdeleteid,visible,setVisible} = props;

    const header = renderHeader();
  return (
    <div>
             
         
           <div className="card">
            <DataTable value={data}  paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} showGridlines={true}  tableStyle={{ minWidth: '50rem' }} emptyMessage="No customers found." header={header} filters={filters} globalFilterFields={['employee_name', 'employee_email', 'role', 'designation']} >
                              <Column field="SI_No" header="SI_NO" body={sno} headerClassName="bg-black text-white border-1 " className='border-1 border-black'></Column> 
                              <Column field="Action" header="Action" body={Action} headerClassName="bg-black text-white border-1" className='border-1 border-black'></Column> 
                              <Column field="employee_id" header="Employee_ID" sortable filter headerClassName="bg-black text-white border-1" className='border-1 border-black'></Column>
                              <Column field="employee_name" header="Name" sortable filter headerClassName="bg-black text-white border-1" className='border-1 border-black'></Column>
                              <Column field="employee_email" header="Employee_Email" sortable filter headerClassName="bg-black text-white border-1" className='border-1 border-black'></Column>
                              <Column field="date_of_birth" header="Date_of_Birth" sortable filter headerClassName="bg-black text-white border-1" className='border-1 border-black'></Column>
                              <Column field="date_of_joining" header="Date_of_Joining" sortable filter headerClassName="bg-black text-white border-1" className='border-1 border-black'></Column>
                              <Column field="organization_name" header="Organization" sortable filter headerClassName="bg-black text-white border-1" className='border-1 border-black'></Column>
                              <Column field="role" header="Role" sortable filter headerClassName="bg-black text-white border-1" className='border-1 border-black'></Column>
                              <Column field="designation" header="Designation" sortable filter headerClassName="bg-black text-white border-1" className='border-1 border-black'></Column>
                              <Column field="team_type" header="Team_Type" sortable filter headerClassName="bg-black text-white border-1" className='border-1 border-black'></Column>
                              <Column field="phone_number" header="Phone_Number" sortable filter headerClassName="bg-black text-white border-1" className='border-1 border-black'></Column>
                              <Column field="work_status" header="Work_Status" sortable filter headerClassName="bg-black text-white border-1" className='border-1 border-black'></Column>
                              <Column field="otp_access" header="OTP_Access" sortable filter headerClassName="bg-black text-white border-1" className='border-1 border-black'></Column>
                              <Column field="otp_email" header="OTP_Email" sortable filter headerClassName="bg-black text-white border-1" className='border-1 border-black'></Column>
            </DataTable>
           </div>
 <Modal backdrop="opaque" isOpen={isOpen} onOpenChange={onOpenChange} classNames={{backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20" }} style={{ maxWidth: '80vw', width: '80%' }} >
   <ModalContent>
    {(onClose) => (
      <>
        <ModalHeader className="flex flex-col gap-1">Employee Information</ModalHeader>
        <ModalBody className="flex flex-wrap gap-4">
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 items-center">
            <div className="flex flex-col w-full md:w-1/3">
              <label >Employee ID:</label>
              <input className="border p-2 rounded hover:border-blue-500" type="text" placeholder='id' name="employee_id"  value={formdata?.employee_id} onChange={handleChange} />
            </div>
            <div className="flex flex-col w-full md:w-1/3">
              <label >Employee Name:</label>
              <input className="border p-2 rounded hover:border-blue-500" type="text"  name="employee_name" placeholder="Enter Employee Name" onChange={handleChange} value={formdata?.employee_name} required/>
            </div>
            <div className="flex flex-col w-full md:w-1/3">
              <label >Employee Email:</label>
              <input className="border p-2 rounded hover:border-blue-500" type="email"  name="employee_email" placeholder="Enter Employee Email" onChange={handleChange}  value={formdata?.employee_email} required />
            </div>
          </div>

          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 items-center">
            <div className="relative flex flex-col w-full md:w-1/3">
              <label >Password:</label>
              <input id="password" name="password" type={type} onChange={handleChange} value={formdata?.password} required
                  className="relative  w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500  rounded-b-md   sm:text-sm hover:border-[#495057]"
                  placeholder="Password" />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 py-11 cursor-pointer" onClick={togglePasswordVisibility}>
                  <i className={`fi ${passwordVisible ? 'fi-rr-eye' : 'fi-rr-eye-crossed'} text-gray-400`}></i>
                </div>
            </div>
            <div className="flex flex-col w-full md:w-1/3">
              <label >Date of Birth:</label>
              <input className="border p-2 rounded hover:border-blue-500" type="text"  name="date_of_birth" placeholder="Enter Date of Birth"  onChange={handleChange}  value={formdata?.date_of_birth} required/>
            </div>
            <div className="flex flex-col w-full md:w-1/3">
              <label >Date of Joining:</label>
              <input className="border p-2 rounded hover:border-blue-500" type="text" id="doj" name="date_of_joining" placeholder="Enter Date of Joining" onChange={handleChange} value={formdata?.date_of_joining} required/>
            </div>
          </div>

          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 items-center">
            <div className="flex flex-col w-full md:w-1/3">
              <label >Organization Name:</label>
              <input className="border p-2 rounded hover:border-blue-500" type="text"  name="organization_name" placeholder="Enter Organization Name" onChange={handleChange} value={formdata?.organization_name} required/>
            </div>
            <div className="flex flex-col w-full md:w-1/3">
              <label >Role:</label>
              <input className="border p-2 rounded hover:border-blue-500" type="text"  name="role" placeholder="Enter Role" onChange={handleChange} value={  formdata?.role } required/>
            </div>
            <div className="flex flex-col w-full md:w-1/3">
              <label >Designation:</label>
              <input className="border p-2 rounded hover:border-blue-500" type="text"  name="designation" placeholder="Enter Designation" onChange={handleChange} value={  formdata?.designation } required/>
            </div>
          </div>

          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 items-center">
            <div className="flex flex-col w-full md:w-1/3">
              <label >Team Type:</label>
              <input className="border p-2 rounded hover:border-blue-500" type="text"  name="team_type" placeholder="Enter Team Type" onChange={handleChange} value={  formdata?.team_type } required/>
            </div>
            <div className="flex flex-col w-full md:w-1/3">
              <label >Phone Number:</label>
              <input className="border p-2 rounded hover:border-blue-500" type="tel"  name="phone_number" placeholder="Enter Phone Number" onChange={handleChange} value={  formdata?.phone_number } required/>
            </div>
            <div className="flex flex-col w-full md:w-1/3">
              <label >Work Status:</label>
              <input className="border p-2 rounded hover:border-blue-500" type="text"  name="work_status" placeholder="Enter Work Status"  onChange={handleChange} value={  formdata?.work_status } required/>
            </div>
          </div>

          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 items-center">
            <div className="flex flex-col w-full md:w-1/2">
              <label >OTP Access:</label>
              <input className="border p-2 rounded hover:border-blue-500" type="text"  name="otp_access" placeholder="Enter OTP Access" value={  formdata?.otp_access }  />
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <label >OTP Email:</label>
              <input className="border p-2 rounded hover:border-blue-500" type="email"  name="otp_email" placeholder="Enter OTP Email" value={  formdata?.otp_email }  />
            </div>
          </div>
        </ModalBody>
              <ModalFooter>
                  <button className={`${deletepopup==true?"bg-green-500":"bg-red-500"}  text-white px-3 py-1 rounded-lg mx-1`} onClick={onClose}>Close</button>
                  <button className={`${deletepopup==true?"bg-red-500":"bg-green-500"}  text-white px-3 py-1 rounded-lg mx-1`}  onClick={()=>{(bool?register():update())}}>{(bool?"Save":"Update")}</button>
              </ModalFooter>
            </> )}
        </ModalContent>
      </Modal>
          
          {/* delete box model */}
            <div className={`flex justify-content-center `}>
                  <Dialog header="Delete Conformation" headerClassName=' text-center'  visible={deletepopup} style={{ width: '50vw' }} onHide={() => {if (!deletepopup) return; setdeletepopup(false); }}>
                      <p className=" text-center m-0"> Do you want to delete this Employee {`${deleteid}`}</p>
                      <div className='flex justify-center py-4 px-10 gap-4'>
                          <button className=" bg-gray-500 text-black px-4 py-1 rounded-lg mx-1" onClick={() => {if (!deletepopup) return; setdeletepopup(false); }}>Close </button>
                          <button className="bg-red-500  text-white px-4 py-1 rounded-lg mx-1" onClick={()=>{deletefun(deleteid);setdeletepopup(false)}}  >Delete </button>
                      </div> 
                  </Dialog>
            </div>
  </div>
  )
}

