import React, {useState} from 'react';
import styles from './linki.module.css';

const Link = (props) => {



	return(
		<button onClick={props.click} className={styles.Butt}>{props.children}</button>

	)
}

export default Link;