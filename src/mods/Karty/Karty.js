import React from 'react';

import Kwadrat from './Kwadrat';
import Etykieta from './Etykieta';

const stylKarty = {
            height: 200,
            width: 150,
            padding: 0,
            margin: 15,
            backgroundColor: "#FFF",
            boxShadow: "0px 0px 5px #777",
            float: "left"
          };

const Karta = (props) =>{

	return(
		<div style={stylKarty}>
            <Kwadrat color={this.props.kolorkarty}/>
            <Etykieta color={this.props.kolorkarty}/>
        </div>
	);
}

export default Karta;