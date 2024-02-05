import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import data from '../win.json';

const ITEMS_PER_PAGE = 30; // Change this value as needed

const Table = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchChange = event => {
    const value = event.target.value;
    setCurrentPage(1); // Reset current page when search term changes
    setSearchTerm(value);
  };

  const filteredData = data.filter(item =>
    (typeof item.id === 'string' && item.id.includes(searchTerm)) ||
    (typeof item.name === 'string' && item.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  

  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        <input
          type="text"
          placeholder="Search by USER ID or USER NAME"
          className="border border-gray-300 px-3 py-2 rounded-md mb-4 w-full sm:w-auto"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="shadow sm:rounded-lg">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User ID
                </th>
                <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User Name
                </th>
                <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Number of Quests
                </th>
                <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  XP
                </th>
                <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  $KIX Reward
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentItems.map(item => (
                <tr key={item.id} className="hover:bg-gray-100">
                  <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap">{item.id}</td>
                  <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap">{item.name}</td>
                  <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap">{item.quest}</td>
                  <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap">{item.xp}</td>
                  <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap">{item.reward}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <div>
          Page {currentPage} of {totalPages}
        </div>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Table;
