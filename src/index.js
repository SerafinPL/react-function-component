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
	ReactDOM.render(
		<div>
			<Karta color='#74a5b2'/>
			<Karta color='#32asd8'/>
			<Karta color='#ca5d8e'/>
			<Karta color='#4358ac'/>
		</div>,
		document.getElementById('root')	
	);
}


ReactDOM.render(
  <div>
    <Link children="Literki" click={literki}/>
    <Link children="próba2" />
    <Link children="próba3" />
  </div>,
  document.getElementById('linki')
);

