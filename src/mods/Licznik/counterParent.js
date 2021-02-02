import React, { useState }from 'react';

import Counter from './counter';
import styles from './counter.module.css'

const CounterParent = () => {

	const [count, setCount] = useState ( 0 );

	const increase = (event) => {

		let actualState = count;

		if (event.shiftKey) {
            actualState += 10;
          }else{
            actualState += 1;
          }

        setCount(actualState);
	}

	return(
			<div className={styles.backGround}>
				<Counter diplay={count}/>
				<button onClick={increase} className={styles.styleButton} >+1</button>
				<p className={styles.para}>Naciśnij Shift i zobacz różnice</p>
			</div>
	)

}

export default CounterParent;