import React from 'react'

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
    </>
  )
}

export default Navbar