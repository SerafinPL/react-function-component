import React, { useState }from 'react';


import styles from './counter.module.css';


const PlusButton = (props) => {

	return(
            <button onClick={props.clickFunction} className={styles.styleButton} >+1</button>
          )
}

export default PlusButton;