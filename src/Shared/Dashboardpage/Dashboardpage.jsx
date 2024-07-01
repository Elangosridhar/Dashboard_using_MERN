import {  DateRangePicker } from '@nextui-org/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {RangeCalendar} from "@nextui-org/react";
import {today, getLocalTimeZone} from '@internationalized/date';
import Week from '../Week/Week';
import Day from '../Day/Day';
import { format, addMonths, subMonths, startOfToday, startOfWeek, addDays, addWeeks } from 'date-fns';
import Calender from '../Calender/Calender';


export default function Dashboardpage(props) {

    const {currentMonth,setCurrentMonth,selectedDate,setSelectedDate,viewMode,setViewMode, 
    nextMonth,prevMonth,nextWeek,prevWeek, onDateClick,renderHeader,renderDays} = props;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
            <div className="flex justify-between items-center bg-black text-white p-4 rounded">
                <div className="text-lg font-semibold">Dashboard</div>
                <div className="flex items-center space-x-4">
                    {/* Additional header content if needed */}
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
                <div className="bg-white p-6 rounded shadow">
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
                    {renderHeader()}
                    {viewMode === 'month' ? (
                        <>
                            {renderDays()}
                            <Calender currentMonth={currentMonth} selectedDate={selectedDate} onDateClick={onDateClick} />
                        </>
                    ) : viewMode === 'week' ? (
                        <Week currentMonth={currentMonth} selectedDate={selectedDate} />
                    ) : (
                        <Day selectedDate={selectedDate} />
                    )}
                </div>
                <div className="bg-white p-6 rounded shadow">
                    <div className="text-lg font-semibold">Total Working Days/Month</div>
                    <div className="mt-4">
                        <div className="flex justify-between items-center">
                            <DateRangePicker label="Stay duration" className="max-w-xs" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
