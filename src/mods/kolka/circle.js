import React from 'react';

import styles from './circle.module.css';


const Circle = (props) =>{

	const colorStyle = {
		// właściwość kolor do modyfikacji
        backgroundColor: props.bgColor,
        
	};

	return(
			<div style={colorStyle} className={styles.circle}></div>
            
		);
}

export default Circle;