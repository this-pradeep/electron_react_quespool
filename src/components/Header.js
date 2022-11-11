import React from 'react'
import quespool from '../images/quespool.svg'
const Header = () => {
  return (
    <div className='bg-white shadow-md sticky top-0 py-2 w-full flex items-center justify-center'>
        <div className='mx-auto '>
            <img src={quespool} className="h-10 w-auto" alt="Quespool" />
        </div>
    </div>
  )
}

export default Header