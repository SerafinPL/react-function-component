import React, { useState }  from 'react';

import styles from './LicznikPiorunow.module.css';

const Licznik = () => {

	

	const [piorunyState, piorunySetState ] = useState(
			0
		);

	const timerStorm = () =>{
 
		let pior = piorunyState + 100;
		
		piorunySetState(
			pior 
		);

		
	}

	setInterval(timerStorm, 1000);

	return(
		<h1 className={styles.licznik}>{piorunyState}</h1>
	)

}


export default Licznik


