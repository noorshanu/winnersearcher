import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <div className="py-3 sm:py-2 flex justify-center items-center gap-4">
          <img
            src="images/logo.png"
            alt=""
            className=" h-[2rem] sm:h-[40px]"
          />{" "}
          <h2 className=" font-work text-3xl sm:text-4xl font-normal text-white tracking-[-0.11em]">
            TRADE-ATHON{" "}
          </h2>

        </div>
        <nav  className=' flex justify-center gap-4 items-center'>
          <Link to='/' className=' text-sm sm:text-lg font-bold text-white active:text-[#11c9c7] '>
            Home
          </Link>
          <Link to='/galxereward'  className=' text-sm sm:text-lg font-bold text-white  active:text-[#11c9c7]'>
          Galxe Reward
          </Link>
          <Link to='/taskonreward'  className=' text-sm sm:text-lg font-bold text-white  active:text-[#11c9c7]'>
          Taskon Reward
          </Link>

        </nav>
    </>
  )
}

export default Navbar