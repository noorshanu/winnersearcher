import React, { useState } from 'react';

import data from '../galxe.json';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const ITEMS_PER_PAGE = 15;

function GalxeTable() {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [expandedUserId, setExpandedUserId] = useState('');
  
    const handleSearchChange = event => {
      const value = event.target.value;
      setCurrentPage(1); // Reset current page when search term changes
      setSearchTerm(value);
    };
    const toggleExpandUserId = userId => {
      if (expandedUserId === userId) {
        setExpandedUserId('');
      } else {
        setExpandedUserId(userId);
      }
    };
    const filteredData = data.filter(item =>
      (typeof item.address === 'string' && item.address.includes(searchTerm)) 
    );
    
  
    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  
    const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <>
     {/* <h1 className=' text-white text-base pb-2'>Sprint 1 Rewards</h1> */}
    <div className=' flex  flex-col sm:flex-row items-center sm:items-start' >
    <input
          type="text"
          placeholder="🔍 Search by ADDRESS"
          className="border border-[#7c7c7c] px-3 py-2 text-white bg-transparent rounded-md mb-4 w-full sm:w-[300px]"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <p className=' block text-white text-sm font-work sm:hidden'>Scroll left to view more details</p>
    </div>
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
    
        <div className="shadow sm:rounded-lg">
          <table className="w-full  divide-y divide-white rounded-sm">
            <thead className="bg-gray-50">
              <tr>
              <th scope="col" className=" bg-[#1e2f38] text-white px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                 s.no
                </th>
                <th scope="col" className=" bg-[#1e2f38] text-white px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                 Address
                </th>
              
             
              
                <th scope="col" className="bg-[#1e2f38] text-white px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  $KIX Reward
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#051f23] divide-y divide-white text-white ">
              {currentItems.map(item => (
                <tr key={item.id} className="hover:bg-gray-100">
                  <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                    {item.id}
                  </td>
              <td
                    className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap cursor-pointer"
                    data-tooltip-place="left"
                    data-tooltip-id="my-tooltip"
                    onClick={() => toggleExpandUserId(item.address)}
                    data-tooltip-content={expandedUserId === item.address ? "Click to collapse" : "Click to expand"}
                    data-for={item.address} // Unique tooltip ID for each user ID
                  >
                    {expandedUserId === item.address ? item.address : `${item.address.substring(0, 8)}...${item.address.substring(item.address.length - 5)}`}
                  </td>
                  <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap">{item.reward}</td>
                  

                 
                </tr>
              ))}
            </tbody>
          </table>
          <Tooltip id="my-tooltip" />
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-[#7e007b] text-white px-4 py-2 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <div className=' text-white font-work'>
          Page {currentPage} of {totalPages}
        </div>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-[#7e007b] text-white px-4 py-2 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </>
  )
}

export default GalxeTable