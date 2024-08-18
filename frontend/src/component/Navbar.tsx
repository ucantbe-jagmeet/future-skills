import React from 'react'

const Navbar = () => {
  return (
    <main className=" bg-blue-100 text-white px-2 pt-2">
      <div className="flex h-20 bg-gray-800 justify-between items-center md:px-40 px-5 rounded-t-lg ">
        <div className="flex gap-x-3 text-xl items-center">
          <h2>Abstract</h2>
          <div className="h-5 w-[2px] bg-gray-400" />
          <h2>Help Center</h2>
        </div>
        <button className="border-2 rounded md:px-5 py-1 md:text-lg tracking-wide md:mr-40">
          Submit a Request
        </button>
      </div>
    </main>
  );
}

export default Navbar