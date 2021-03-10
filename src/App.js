

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


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
    		<Link children="Koloryzator" />
		  	<Link children="Licznik" />
		  	<Link children="Kółka"  />
		  	<Link children="Pioruny"  />
		  	<Link children="Karty" />
		    <Link children="Literki" />
    	</nav>
	    <header className="App-header">
	     
	    </header>
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
