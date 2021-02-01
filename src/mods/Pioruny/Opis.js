import React from 'react';

const OpisPiorunow = () =>{
	
	const podstawowyStylTxt ={
            margin: 0,
            padding: 0
          }

	const stylTekstu = {
            duzy:{
              fontSize: 38,
              /* operator iteracji zwraca pokolei wartości tablicy lub obiektu*/
              ...podstawowyStylTxt
            },
            sredni:{
              ...podstawowyStylTxt
            },
            maly:{
              fontSize: 16,
              opacity: 0.5,
              ...podstawowyStylTxt
            }
          };

          return(
          	<h2 style={stylTekstu.duzy}>Liczba uderzeń piorunów </h2>
          	<h2 style={stylTekstu.sredni}>na całym świecie </h2>
          	<p style={stylTekstu.maly}>(od otwarcia strony) </p>
          	<p style={stylTekstu.maly}>(według średniej z NatonalGeografic) </p>
          );
}