import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Link from './Linki/linki';
import Napis from './mods/Literki/napis';



const literki =() => {

ReactDOM.render(
  <Napis/>,
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

