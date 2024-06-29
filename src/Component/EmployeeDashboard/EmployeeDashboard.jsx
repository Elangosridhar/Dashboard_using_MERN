import { Avatar } from '@nextui-org/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function EmployeeDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
    <div className="flex justify-between items-center bg-black text-white p-4 rounded">
        <div className="text-lg font-semibold">Dashboard</div>
        <div className="flex items-center space-x-4">
        
        </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
        <div className=" bg-white p-6 rounded shadow">
            <div className="flex justify-between items-center">
                <div className="text-lg font-semibold">00:00:00</div>
                <button className="bg-red-500 text-white px-4 py-2 rounded">Checkout</button>
            </div>
            <div className="text-sm text-gray-500 mt-2">Start time: 00:00:00</div>
        </div>
        <div className="bg-white p-6 rounded shadow flex items-center justify-between">
            <i className="pi pi-users text-3xl text-green-500"></i>
            <div>
                <div className="text-xl font-semibold">00</div>
                <div className="text-sm text-gray-500">Total Present</div>
            </div>
        </div>
        <div className="bg-white p-6 rounded shadow flex items-center justify-between">
            <i className="pi pi-user-minus text-3xl text-red-500"></i>
            <div>
                <div className="text-xl font-semibold">0</div>
                <div className="text-sm text-gray-500">Total Absent</div>
            </div>
        </div>
        <div className="bg-white p-6 rounded shadow flex items-center justify-between">
            <i className="pi pi-calendar text-3xl text-pink-500"></i>
            <div>
                <div className="text-xl font-semibold">Upcoming Birthday</div>
                <div className="text-sm text-gray-500">No Data Found!!</div>
            </div>
        </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        <div className="col-span-2 bg-white p-6 rounded shadow">
            <div className="flex justify-between items-center">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Today</button>
                <div className="text-lg font-semibold">June 2024</div>
                <div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Month</button>
                    <button className="bg-gray-300 text-black px-4 py-2 rounded ml-2">Week</button>
                    <button className="bg-gray-300 text-black px-4 py-2 rounded ml-2">Day</button>
                    <button className="bg-gray-300 text-black px-4 py-2 rounded ml-2">List</button>
                </div>
            </div>
            <div className="mt-4">
                {/* Add your calendar component here */}
                <div className="grid grid-cols-7 gap-2">
                    {/* Example calendar days */}
                    <div className="p-2 text-center">Sun</div>
                    <div className="p-2 text-center">Mon</div>
                    <div className="p-2 text-center">Tue</div>
                    <div className="p-2 text-center">Wed</div>
                    <div className="p-2 text-center">Thu</div>
                    <div className="p-2 text-center">Fri</div>
                    <div className="p-2 text-center">Sat</div>
                    {/* Add more days */}
                </div>
            </div>
        </div>
        <div className="bg-white p-6 rounded shadow">
            <div className="text-lg font-semibold">Total Working Days/Month</div>
            <div className="mt-4">
                <div className="flex justify-between items-center">
                    <div>01/01/2024 - 12/30/2024</div>
                    <div>
                        <i className="pi pi-calendar text-xl"></i>
                    </div>
                </div>
              
                
            </div>
        </div>
    </div>
</div>
  )
}
