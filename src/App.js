

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';


import Link from './Linki/linki';
import Napis from './mods/Literki/napis';
import Talja from './mods/Karty/Talja';
import WyswietlaczPiorunow from './mods/Pioruny/Wyswietlacz';
import CircleSquad from './mods/kolka/circleSquad';
import CounterParent from './mods/Licznik/counterParent';
import Colorizer from './mods/Koloryzator/colorizer';






const App = () =>  {
  return (
    <div className="App">
      	
    	<nav className="linki">
    		<NavLink to='/colorizer' >Koloryzator</NavLink>
		  	<NavLink to='/counter' >Licznik</NavLink>
		  	<NavLink to='/circle'  >Kółka</NavLink>
		  	<NavLink to='/lightning'  >Pioruny</NavLink>
		  	<NavLink to='/cards' >Karty</NavLink>
		    <NavLink to='/letters' >Literki</NavLink>
    	</nav>
	    
	    <div className='root'>
	    	
	    	<Colorizer/>
	    	<CounterParent/>
	    	<CircleSquad/>
	    	<WyswietlaczPiorunow/>
	    	<Talja/>
	    	<Napis/>
	    </div>

    </div>
  );
}

export default App;
