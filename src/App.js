

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
import Colorizer from './mods/Koloryzator/colorizer';






const App = () =>  {
  return (
    <div className="App">
      	
    	<nav>
    		<Link children="Koloryzator" click={colorizer}/>
		  	<Link children="Licznik" click={counter}/>
		  	<Link children="Kółka" click={circle} />
		  	<Link children="Pioruny" click={pioruny} />
		  	<Link children="Karty" click={karty}/>
		    <Link children="Literki" click={literki}/>
    	</nav>
	    <header className="App-header">
	      <p>To jest app js</p>
	    </header>
	    <div>
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
