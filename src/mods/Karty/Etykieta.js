import React from 'react';


const stylEtykiety = {
    	fontFamily: "sans-serif",
	  	fontWeight: "bold",
	    padding: 13,
        margin: 0
      }

const Etykieta = (props) =>{
		return(
			<p style={stylEtykiety}> {this.props.color} </p>
		);
}

export default Etykieta;