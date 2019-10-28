import React from 'react';
import './css/Robot.css';

const Robot = (props) => {
	  return(
      <div className ={`robot ${props.direction}`} style={{marginLeft: props.left + 'px', marginTop: props.top + 'px'}}>
      <div className ="head"></div>
      <div className="body"></div>
      </div>
    )
}

export default Robot;
