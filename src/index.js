import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Link from './Linki/linki';
import Napis from './mods/Literki/napis';
import Talja from './mods/Karty/Talja';
import WyswietlaczPiorunow from './mods/Pioruny/Wyswietlacz';



const literki =() => {

	ReactDOM.render(
	  <Napis/>,
	  document.getElementById('root')
	);
}

const karty = () => {
	ReactDOM.render(
		<Talja/>,
		document.getElementById('root')	
	);
}

const pioruny = () => {
	ReactDOM.render(
		<WyswietlaczPiorunow/>,
		document.getElementById('root')	
	);
}


ReactDOM.render(
  <div>
  	<Link children="Pioruny" click={pioruny} />
  	<Link children="Karty" click={karty}/>
    <Link children="Literki" click={literki}/>
    
    <Link children="próba3" />
  </div>,
  document.getElementById('linki')
);

