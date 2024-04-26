import React from 'react'
import Navbar from '../components/Navbar'
import GalxeTable from '../components/GalxeTable'

function Galex() {
  return (
   <>
   <div className="container-wrapper mx-auto p-4">
        <Navbar/>
        <h1 className="text-2xl sm:text-4xl text-center mt-3 font-work text-white font-medium">
        Galxe Sprint 1 Rewards
        </h1>
        <p className=' text-white text-sm text-center'>
        (22.01.24 - 22.04.24)
        </p>
        <h1 className="text-lg sm:text-2xl text-center my-2 font-work text-white font-medium mb-1">
        50,000 $KIX Total Prize Fund,
        </h1>

        <h1 className="text-lg sm:text-2xl text-center  font-work text-white font-medium mb-4">
        100 $KIX per successful entrant
        </h1>

        <div>
            <GalxeTable/>
        </div>
        </div>
   </>
  )
}

export default Galex