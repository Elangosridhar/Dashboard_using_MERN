import React, { useState } from 'react'
import { format } from 'date-fns';

export default function Day({ selectedDate }) {
    const hours = Array.from({ length: 24 }, (_, i) => i); // Generate hours from 0 to 23
    const [events, setEvents] = useState({});

    const handleTimeSlotClick = (hour, half) => {
        const key = `${hour}-${half}`;
        
        setEvents((prevEvents) => {
            const newEvents = { ...prevEvents };
            if (newEvents[key]) {
                delete newEvents[key]; // Remove event if it already exists
            } else {
                const startTime = `${hour % 12 || 12}:${half === 0 ? '00' : '30'} ${hour < 12 ? 'am' : 'pm'}`;
                const endTime = `${hour % 12 || 12}:${half === 0 ? '30' : '00'} ${half === 0 ? (hour < 11 ? 'am' : hour === 11 ? 'pm' : 'pm') : (hour < 11 ? 'am' : hour === 11 ? 'pm' : hour === 23 ? 'am' : 'pm')}`;
                newEvents[key] = `${startTime} - ${endTime}`; // Add event
            }
            return newEvents;
        });
    };


  return (
    <div>
         <div className="h-96 overflow-y-auto">
            <div className="grid grid-cols-1 gap-1 sticky">
                <div className="p-2 text-center font-small">{format(selectedDate, 'eeee')}</div>
            </div>
            <div >
                {hours.map(hour => (
                    <div key={hour} className="grid grid-cols-8 gap-1">
                        <div className="col-span-1 p-2 text-right border-white border-2 bg-gray-200">{`${hour % 12 === 0 ? 12 : hour % 12}${hour < 12 ? 'am' : 'pm'}`}</div>
                        <div className="col-span-7">
                            {[0, 1].map(half => ( 
                                <div key={half} className={`border border-gray-300 ${half === 0 ? 'bg-yellow-100 ' : 'bg-yellow-200'} h-10 relative cursor-pointer`} onClick={() => handleTimeSlotClick(hour, half * 30)}>
                                    {events[`${hour}-${half * 30}`] && (
                                        <div className="bg-blue-500 text-white p-1 rounded absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                            {events[`${hour}-${half * 30}`]}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};
