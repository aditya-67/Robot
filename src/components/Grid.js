import React from 'react';
import Robot from './Robot.js';
import './css/Grid.css';

const Layout = () => {
  var indents = [];
for (var i = 0; i < 25; i++) {
  indents.push(<div key={i} className="grid-item"></div>);
}
return indents;
}

function Grid(props) {

	  return(
      <div>
        <Robot left={props.left} top={props.top} direction={props.direction}/>
        <div className="grid-container">
          <Layout />
        </div>
      </div>
    )
}

export default Grid;
