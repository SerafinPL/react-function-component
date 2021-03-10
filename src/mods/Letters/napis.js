import React from 'react';
import Literka from './literka';


const Napis = () =>{

	const randomColors = () =>{
			let k = Math.floor(Math.random() * 255).toString(16);
			if (k.length < 2){
				k = '0' + k;
			}
			return(k)
		}

	const word = 'Kuba Koder';
	const wordArr = word.split('');

	let letters = wordArr.map((value, index) => (
				<Literka kolorTla={"#" + randomColors() + randomColors() + randomColors()}>{value}</Literka>
		)

	);

	return(
		<div>
    		{letters}
		</div>
	);
}


export default Napis;


// <Literka kolorTla="#5ad42c">K</Literka>
//     		<Literka kolorTla="#0afbb8">u</Literka>
// 		    <Literka kolorTla="#3e44e5">b</Literka>
// 		    <Literka kolorTla="#83ac3b">a</Literka>
// 		    <Literka kolorTla="#18e6c7"> </Literka>
// 		    <Literka kolorTla="#1a5e46">K</Literka>
// 		    <Literka kolorTla="#c478e6">O</Literka>
// 		    <Literka kolorTla="#a5de81">D</Literka>
// 		    <Literka kolorTla="#654a7e">E</Literka>
// 		    <Literka kolorTla="#2dc48b">R</Literka>