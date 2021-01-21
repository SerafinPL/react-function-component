import React, {useState} from 'react';
import './linki.css';

const Link = (props) => {



	return(
		<button onClick={props.click}>{props.children}</button>

	)
}

export default Link;