import React from 'react';
const Searchbox = ({searchfield, searchChange}) => {
	return (
		<div className='pa2'>
		  <input
		  className='pa3 ba b--green bg-lightest-blue' 
		  style={{borderRadius: '5px'}}
		  type='search' 
		  placeholder='Suchen'
		  onChange={searchChange}/>
	  </div>
	);
};

export default Searchbox;