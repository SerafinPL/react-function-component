import React from 'react';

import Circle from './circle';


const CircleSquad = () => {


	const colors = ["#393e41", "#e94f37", "#ac89bf", "#a1d363", '#3260fa',
                    "#54cd97", "#ba5483", "#dc5193", "#f8a5c1", "#c4f94c"];
    

    const showCircle = () => {

    	let colorsCircle = [];
    	

    	for (let i = 0; i < colors.length; i++ ) {
    		const random = Math.floor(Math.random() * colors.length);

    		colorsCircle.push(<Circle key={i} bgColor={colors[random]}/>);

    	}

    	
    	return(
    			colorsCircle
    		);	
    }

	return(
		<>
			{showCircle()}
		</>
	);

}

export default CircleSquad;