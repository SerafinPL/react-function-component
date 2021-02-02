import React from 'react';

import Circle from './circle';

import styles from './circle.module.css';


const CircleSquad = () => {


	const colors = ["#393e41", "#e94f37", "#ac89bf", "#300820", '#3260fa',
                    "#54cd97", "#8cb5b5", "#dc5193", "#f8a5c1", "#c4f94c"];
    

    const showAllCircle = () => {

        let circles = colors.map((value, index) => (
                <Circle key={'all' + index} bgColor={value}/>
            ));

        
        // for (let i=0; i < colors.length; i++) {
        //     circles.push()
        // }

        return circles;
    }

    const showCircleRandomly = () => {

    	let colorsCircle = colors.map((value, index) => {

                    const random = Math.floor(Math.random() * colors.length);

                    return(<Circle key={'random' + index} bgColor={colors[random]}/>)

                }
            );
    	

    	// for (let i = 0; i < colors.length; i++ ) {
    	// 	const random = Math.floor(Math.random() * colors.length);

    	// 	colorsCircle.push(<Circle key={'random' + i} bgColor={colors[random]}/>);

    	// }

    	
    	return(
    			colorsCircle
    		);	
    }

	return(
		<>
            <div className={styles.blok}>
			     {showCircleRandomly()}
            </div>
            <div className={styles.blok}>
                {showAllCircle()}
            </div>
		</>
	);

}

export default CircleSquad;