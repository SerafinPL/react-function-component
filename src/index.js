import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Link from './Linki/linki';
import Napis from './mods/Literki/napis';
import Karta from './mods/Karty/Karty';



const literki =() => {

	ReactDOM.render(
	  <Napis/>,
	  document.getElementById('root')
	);
}

const karty = () => {

	const kolory = [];

	for (let i=0; i<4 ;i++){
		const x = Math.floor(Math.random() * 255).toString(16);
		const y = Math.floor(Math.random() * 255).toString(16);
		const z = Math.floor(Math.random() * 255).toString(16);
		kolory[i] = x + y + z;
		console.log(kolory[i]);
	}

	ReactDOM.render(
		<div>
			<Karta color={kolory[0]}/>
			<Karta color={kolory[1]}/>
			<Karta color={kolory[2]}/>
			<Karta color={kolory[4]}/>
		</div>,
		document.getElementById('root')	
	);
}


ReactDOM.render(
  <div>
  	<Link children="Karty" click={karty}/>
    <Link children="Literki" click={literki}/>
    <Link children="próba2" />
    <Link children="próba3" />
  </div>,
  document.getElementById('linki')
);

