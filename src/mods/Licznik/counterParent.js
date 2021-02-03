import React, { useState }from 'react';

import PlusButton from './PlusButton';
import Counter from './counter';
import styles from './counter.module.css';


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
				<Counter display={count}/>
				<PlusButton clickFunction={increase}/>
				<p className={styles.para}>Naciśnij Shift i zobacz różnice</p>
			</div>
	)

}

export default CounterParent;