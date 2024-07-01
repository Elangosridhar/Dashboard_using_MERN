import React from 'react'
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';

export default function Calender({ currentMonth, selectedDate, onDateClick }) {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            formattedDate = format(day, dateFormat);
            const cloneDay = day;
            days.push(
                <div className={`col cell p-2 text-center border ${!isSameMonth(day, monthStart) ? "bg-gray-200 text-gray-400" : isSameDay(day, selectedDate) ? "bg-blue-500 text-white" : "bg-white text-black"}`}  key={day}  onClick={() => onDateClick(cloneDay)} >
                    <span className="number">{formattedDate}</span>
                </div>
            );
            day = addDays(day, 1);
        }
        rows.push(
            <div className="row flex" key={day}>{days}</div>
        );
        days = [];
    }
    return <div>{rows}</div>;
};


