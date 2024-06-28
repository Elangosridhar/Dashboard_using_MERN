import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="py-6">
      <div className="w-full px-4">
        <div className="text-xl font-bold mb-4">
          Dashboard
        </div>
        <div className="py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
         
          <Link to="/Employee">
            <div className="flex items-center bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 hover:shadow-lg transition hover:border-black duration-300 ease-in-out">
              <div className="px-5">
                <i className="fi fi-ts-corporate-alt text-black text-4xl"></i>
              </div>
              <div className="text-lg font-medium ml-3">Employee</div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
