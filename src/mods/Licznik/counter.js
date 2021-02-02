import React from 'react';

import styles from './counter.module.css'

const Counter = (props) => {

	

  return(
    <div className={styles.counter}>
      {props.display}
    </div>
  );

}