import { Avatar, DateRangePicker } from '@nextui-org/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {RangeCalendar} from "@nextui-org/react";
import {today, getLocalTimeZone} from '@internationalized/date';
import Dashboardpage from '../../Shared/Dashboardpage/Dashboardpage';
import { format, addMonths, subMonths, startOfToday, startOfWeek, addDays, addWeeks } from 'date-fns';


export default function EmployeeDashboard() {
    const [currentMonth, setCurrentMonth] = useState(startOfToday());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [viewMode, setViewMode] = useState('month');

    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };

    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };

    const nextWeek = () => {
        setCurrentMonth(addWeeks(currentMonth, 1));
    };

    const prevWeek = () => {
        setCurrentMonth(addWeeks(currentMonth, -1));
    };

    const onDateClick = day => {
        setSelectedDate(day);
        setViewMode('day');
    };

    const renderHeader = () => {
        const dateFormat = "MMMM yyyy";

        return (
            <div className=" flex justify-between items-center p-4 bg-gray-100 rounded-t-lg">
                <div className="flex items-center ">
                    <button className="bg-blue-500 text-white px-2 py-1" onClick={viewMode === 'month' ? prevMonth : viewMode === 'week' ? prevWeek : null}>
                       <i className="fi fi-br-angle-left"></i>
                    </button>
                    <button className="bg-blue-500 text-white px-2 py-1" onClick={viewMode === 'month' ? nextMonth : viewMode === 'week' ? nextWeek : null}>
                        <i class="fi fi-br-angle-right"></i>
                    </button>
                </div>
                <span className="text-lg font-semibold">{format(currentMonth, dateFormat)}</span>
                
                    <div>
                        <button className={`bg-blue-500 text-black px-2 py-1 rounded ${viewMode === 'month' ? '' : 'bg-gray-300 text-white'}`} onClick={() => setViewMode('month')}>month</button>
                        <button className={`bg-blue-500 text-black px-2 py-1 rounded ml-2 ${viewMode === 'week' ? '' : 'bg-gray-300 text-white'}`} onClick={() => setViewMode('week')}>week</button>
                        <button className={`bg-blue-500 text-black px-2 py-1 rounded ml-2 ${viewMode === 'day' ? '' : 'bg-gray-300 text-white'}`} onClick={() => setViewMode('day')}>day</button>
                        <button className="bg-gray-300 text-black px-2 py-1 rounded ml-2">list</button>
                    </div>
                
            </div>
        );
    };

    const renderDays = () => {
        const days = [];
        const dateFormat = "eeee";
        const startDate = startOfWeek(currentMonth);

        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="col col-center p-2 text-center font-medium" key={i}>
                    {format(addDays(startDate, i), dateFormat)}
                </div>
            );
        }
        return <div className="days row flex bg-gray-200">{days}</div>;
    };

  return (
       <Dashboardpage currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} selectedDate={selectedDate} setSelectedDate={setSelectedDate} viewMode={viewMode} setViewMode={setViewMode} 
       nextMonth={nextMonth} prevMonth={prevMonth} nextWeek={nextWeek} prevWeek={prevWeek} onDateClick={onDateClick} renderHeader={renderHeader} renderDays={renderDays} />
  )
}
