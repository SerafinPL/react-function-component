import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Link from './Linki/linki';

const test =() => {

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('root')
);
}

ReactDOM.render(
  <div>
    <Link children="próba1" click={test}/>
    <Link children="próba2" />
    <Link children="próba3" />
  </div>,
  document.getElementById('linki')
);

