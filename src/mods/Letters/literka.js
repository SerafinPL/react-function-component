import React from 'react';
import './literka.css';


const Literka = (props) => {

	var kolor = {
		backgroundColor : props.kolorTla
	};

	return(
		<div style={kolor} className="literka">
			{props.children}
		</div>
	)
}

export default Literka;