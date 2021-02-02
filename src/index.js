import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Link from './Linki/linki';
import Napis from './mods/Literki/napis';
import Talja from './mods/Karty/Talja';
import WyswietlaczPiorunow from './mods/Pioruny/Wyswietlacz';
import CircleSquad from './mods/kolka/circleSquad';
import CounterParent from './mods/Licznik/counterParent';



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

const circle = () => {
	ReactDOM.render(
		<CircleSquad/>,
		document.getElementById('root')	
	);
}

const counter = () => {
	ReactDOM.render(
		<CounterParent/>,
		document.getElementById('root')	
	);
}

ReactDOM.render(
  <div>
  	<Link children="Licznik" click={counter}/>
  	<Link children="Kółka" click={circle} />
  	<Link children="Pioruny" click={pioruny} />
  	<Link children="Karty" click={karty}/>
    <Link children="Literki" click={literki}/>
    
    
  </div>,
  document.getElementById('linki')
);

