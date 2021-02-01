import React, { useState, useEffect }  from 'react';

import styles from './LicznikPiorunow.module.css';

const Licznik = () => {

	

	const [piorunyState, piorunySetState ] = useState(
			0
		);

	const timerStorm = () =>{
 
		piorunySetState(prev => prev + 100);
	}

	useEffect(() => {
		const interval = setInterval(timerStorm, 1000);
		return () => clearInterval(interval);
	}, []);

	

	return(
		<h1 className={styles.licznik}>{piorunyState}</h1>
	)

}


export default Licznik


