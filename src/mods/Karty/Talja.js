import React from 'react';

import Karta from './Karty';


const Talja = () => {

	const losoweKolory = () =>{
			let k = Math.floor(Math.random() * 255).toString(16);
			if (k.length < 2){
				k = '0' + k;
			}
			return(k)
		}

		
		let karty = [];

		for (let i=0; i<8 ;i++){
			
			karty[i] = (
				<Karta key={i} kolorkarty={'#' + losoweKolory() + losoweKolory() + losoweKolory()}/>
			)
			
		}

		return(karty);
}

export default Talja;