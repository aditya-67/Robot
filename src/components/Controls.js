import React from 'react';
import './css/Controls.css';


class Controls extends React.Component {
	render() {
	  return <div>
    <button className="button" id="left" onClick={e => this.props.move(e)}>Left</button>
    <button className="button" id="right" onClick={e => this.props.move(e)}>Right</button>
    <button className="button" id="up" onClick={e => this.props.move(e)}>Up</button>
    <button className="button" id="down" onClick={e => this.props.move(e)}>Down</button>
    </div>;
  }
}

export default Controls;
