import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import data from '../data.json';

const Table = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredData = data.filter(item =>
    item.id.includes(searchTerm) || item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            <th className="border border-gray-600 px-3 py-2">ID</th>
            <th className="border border-gray-600 px-3 py-2">Name</th>
            <th className="border border-gray-600 px-3 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id}>
              <td className="border border-gray-600 px-3 py-2">{item.id}</td>
              <td className="border border-gray-600 px-3 py-2">{item.name}</td>
              <td className="border border-gray-600 px-3 py-2">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
