import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', border: '2px solid blue', height: '65vh'}} >
			{props.children}
		</div>
	);
};

export default Scroll;