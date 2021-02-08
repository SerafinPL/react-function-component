

import React from 'react';


const LabelColor = (props) => {
	return(
			ReactDOM.createPortal(
					'Kolor :' + props.color,
					document.querySelector('#etykieta')
				)
	);
}

export default LabelColor;