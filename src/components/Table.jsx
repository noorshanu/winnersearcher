import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import data from '../win.json';

const ITEMS_PER_PAGE = 30; // Change this value as needed

const Table = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = data.filter(item =>
    item.id.includes(searchTerm) || item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by ID or Name"
        className="border border-gray-300 px-3 py-2 rounded-md mb-4"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <table className="border-collapse border border-gray-600 w-full">
        <thead>
          <tr>
            <th className="border border-gray-600 px-3 py-2"> User ID</th>
            <th className="border border-gray-600 px-3 py-2">User Name</th>
            <th className="border border-gray-600 px-3 py-2">Number of Quests</th>
            <th className="border border-gray-600 px-3 py-2">XP</th>
            <th className="border border-gray-600 px-3 py-2">$KIX Reward</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(item => (
            <tr key={item.id}>
              <td className="border border-gray-600 px-3 py-2">{item.id}</td>
              <td className="border border-gray-600 px-3 py-2">{item.name}</td>
              <td className="border border-gray-600 px-3 py-2">{item.quest}</td>
              <td className="border border-gray-600 px-3 py-2">{item.xp}</td>
              <td className="border border-gray-600 px-3 py-2">{item.reward}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
    </div>
  );
};

export default Table;