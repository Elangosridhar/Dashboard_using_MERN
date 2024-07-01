// Week.jsx
import React from 'react'
import { format, startOfWeek, addDays } from 'date-fns';

export default function Week  ({ currentMonth }) {
    const startDate = startOfWeek(currentMonth);

    const hours = Array.from({ length: 24 }, (_, i) => i); // Generate hours from 0 to 23

    return (
        <div className="h-96 overflow-y-auto"> {/* Fixed height and scrollable */}
            <div className="grid grid-cols-8 bg-gray-100 sticky  z-10">
                <div className="p-2"></div> {/* Empty cell for hours */}
                {Array.from({ length: 7 }, (_, i) => (
                    <div key={i} className="p-2 text-center font-medium">
                        {format(addDays(startDate, i), 'eee M/d')}
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-8">
                {hours.map(hour => (
                    <React.Fragment key={hour}>
                        <div className="p-2 text-right bg-gray-200">{hour === 0 ? 'all-day' : `${hour % 12 || 12}${hour < 12 ? 'am' : 'pm'}`}</div>
                        {Array.from({ length: 7 }, (_, i) => (
                            <div key={i} className="p-2 border border-gray-300 bg-white h-16"></div>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};


