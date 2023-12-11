import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Perform the search logic using the 'searchTerm' state
    console.log(`Searching for: ${searchTerm}`);
    // Add your search logic here, e.g., make an API call or filter a list
  };

  return (
    <div className="d-flex">
      <input
        type="text"
        className="form-control mr-2"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="btn btn-secondary my-2 my-sm-0" onClick={handleSearch}>
        <BsSearch />
      </button>
    </div>
  );
};

export default SearchBar;
