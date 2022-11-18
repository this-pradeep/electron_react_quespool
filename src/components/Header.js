import React from 'react'
import quespool from '../images/quespool.svg'
const { ipcRenderer } = window.require("electron");
const Header = () => {
  const closeApp = (e)=>{
    e.preventDefault()
    ipcRenderer.send('close')
  }
  return (
    <div className='bg-white shadow-md  sticky top-0 px-3 py-2 w-full flex items-center justify-between'>
        <div className=' '>
            <img src={quespool} className="h-8 w-auto" alt="Quespool" />
        </div>
        <div className='flex items-center justify-end'>
         <button className='outline-none text-gray-700' onClick={closeApp}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
         </button>
        </div>
    </div>
  )
}

export default Header