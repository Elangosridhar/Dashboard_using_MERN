import React from 'react'
export default function Profilepage(props) {

    const {passwordVisible, type, setType,togglePasswordVisibility,setPasswordVisible, user,userdetails,teamMembers}=props
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
             <div className="w-full h-40 flex flex-col items-center justify-center relative">
                <img src="src\assets\img\profileimg.jpg" alt="Profile" className="absolute -bottom-16 w-32 h-32 rounded-full border-4 border-white" />
                <h2 className="text-black font-bold text-2xl">{user.employee_name}</h2>
            </div>

            <div className="mt-20 flex flex-col md:flex-row w-11/12 max-w-5xl">
                <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6 mr-2 mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold mb-4">Team Members</h3>
                    <ol className="list-decimal list-inside">
                        {teamMembers && teamMembers.length > 0 ? (
                            teamMembers.map((member, index) => (
                                <li key={index}>{member}</li>
                            ))
                        ) : (
                            <li>No team members found</li>
                        )}
                    </ol>
                </div>

                <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6 ml-2">
                    <h3 className="text-xl font-semibold mb-4">Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-1">
                            <p className="font-semibold">Employee Id:</p>
                            <p>{user.employee_id}</p>
                        </div>
                        <div className="col-span-1">
                            <p className="font-semibold">Employee Email:</p>
                            <p>{user.employee_email}</p>
                        </div>
                        <div className="col-span-1">
                            <p className="font-semibold">Designation:</p>
                            <p>{user.designation}</p>
                        </div>
                        <div className="col-span-1">
                            <p className="font-semibold">Organization Name:</p>
                            <p>{user.organization_name}</p>
                        </div>
                        <div className="col-span-1">
                            <p className="font-semibold">Date of Birth:</p>
                            <p>{user.date_of_birth}</p>
                        </div>
                        <div className="col-span-1">
                            <p className="font-semibold">Date of Join:</p>
                            <p>{user.date_of_joining}</p>
                        </div>
                        <div className="col-span-1">
                            <p className="font-semibold">Mobile No:</p>
                            <p>{user.phone_number}</p>
                        </div>
                        <div className="col-span-1">
                            <p className="font-semibold">Password:</p>
                            <div className=" relative">
                               <input  name="password" placeholder='password' type={type}   required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
                                   <div className="absolute inset-y-0 right-0 flex items-center pr-5 pt-2 cursor-pointer" onClick={togglePasswordVisibility}>
                                      <i className={`fi ${passwordVisible ? 'fi-rr-eye' : 'fi-rr-eye-crossed'} text-gray-400`}></i>
                                   </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
