import React from 'react'

const Navbar = () => {
  return (
   <nav className='flex justify-between bg-indigo-900 py-4 text-white'>
    <div className="logo"> 
       <span className='font-bold text-xl mx-8 '> iTask</span>
    </div>
    <ul className='flex gap-4  mx-8 '>
        <li className='cursor-pointer hover:font-bold transition-all '>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all '>Your Task</li>
    </ul>
   </nav>
  )
}

export default Navbar
