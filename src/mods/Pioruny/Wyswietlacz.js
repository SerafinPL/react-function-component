import React from 'react';
import Licznik from './LicznikPiorunow';
import Opis from './Opis';

import styles from'./Wyswietlacz.module.css';

const Wyswietlacz = () => {


	return(
		<div className={styles.wyswietlacz}>
			
			<Licznik/>

			<Opis/>
		</div>
	)
}

export default Wyswietlacz;
