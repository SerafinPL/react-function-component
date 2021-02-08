import React, { useState, useRef }from 'react';

import LabelColor from './colorizerLabel';

import styles from './colorizer.module.css'


const Colorizer = (props) => {

	const [colorHook, colorSetHook] = useState('white');
	const [colorBGHook, colorBGSetHook] = useState('white');


	let squareStyle = {
          backgroundColor: colorBGHook
        };

    const textInput = useRef(null);

    const colorValue = (e) => {
        colorSetHook(e.target.value);
      }

    const setNewColor = (e) => {
    	e.preventDefault();
    	const color = colorHook
        colorBGSetHook(color);

        textInput.current.focus();
        textInput.current.value="";

        
      }

	return(

		
          <div className={styles.colorArea}>
            <div style={squareStyle} className={styles.colorSquare}></div>

            <form onSubmit={setNewColor}>
              <input onChange={colorValue}
                      ref={textInput}
                      
                     placeholder="Enter a color value"></input>
              <button type="submit">go</button>
            </form>
            <LabelColor color={colorBGHook}/>
            <p>Wpisz nazwe koloru po angielsku</p>
            <LabelColor color="test"/>
          </div>
        
		
	);
}

export default Colorizer;