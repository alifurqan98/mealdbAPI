import React from 'react';
import "../App.css";

function SearchBar({handleSubmit,query,onChange,isLoading}) {

  // disabled={isLoading}disabled={isLoading}
  // disabled={isLoading || !query} 

  return (
    <>
    <div>
      <form onSubmit={handleSubmit}>
        <div className='search'>
            <input type="text" value={query} onChange={onChange} placeholder='Search Recipe'  />
          <button className="searchbtn"type = "submit">Search</button>
        </div>
        </form>
        
    </div>
     </>
  )
}

export default SearchBar
