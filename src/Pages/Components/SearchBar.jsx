import React from 'react';

const SearchBar = ({ onChange, onSearch }) => {
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onChange(e.target.value)}
        className="lg:w-[545px] p-2 border border-light-gray rounded-l-md shadow-sm focus:outline-none focus:border-green"
      />
      <button
        onClick={onSearch}
        className="px-4 py-2 text-lg bg-green text-white rounded-r-md"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;