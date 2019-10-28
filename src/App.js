import React from 'react';
import Controls from './components/Controls.js';
import Grid from './components/Grid.js';
import './App.css';


class App extends React.Component {
constructor() {
	  super();
    this.moveRobot = this.moveRobot.bind(this);
  	this.state = {
    	left: 0,
      top: 0,
      direction: 'down',
      position: {x : 1, y : 1},
      endFlag : false
    }
  }

  moveRobot(e) {
    if (e.key === 'ArrowUp' || e.key === 'w'){
      this.moveUp();
    }
    if (e.key === 'ArrowRight' || e.key === 's'){
      this.moveRight();
    }
    if (e.key === 'ArrowLeft' || e.key === 'a'){
      this.moveLeft();
    }
    if (e.key === 'ArrowDown' || e.key === 'z'){
      this.moveDown();
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.moveRobot, false);
  }

  move(e) {
    const dir = e.target.id;
    if (dir === 'left'){
      this.moveLeft();
    }
    if (dir === 'right'){
      this.moveRight();
    }
    if (dir === 'up'){
      this.moveUp();
    }
    if (dir === 'down'){
      this.moveDown();
    }

  }

  moveLeft() {
    this.setState({endFlag : false});
    if (this.state.direction === 'left' && this.state.position.x === 1){
      this.setState({endFlag : true});
    }
    else if (this.state.direction !== 'left'){
      this.setState({direction : 'left'});
    }
    else {
      this.setState({
      	left: this.state.left + (-72),
      	top: this.state.top + (0),
        direction : 'left',
        position : {x : this.state.position.x - 1 , y : this.state.position.y}
      });
    }
  }

  moveRight() {
    this.setState({endFlag : false});
    if (this.state.direction === 'right' && this.state.position.x === 5){
      this.setState({endFlag : true});
    }
    else if (this.state.direction !== 'right'){
      this.setState({direction : 'right'});
    }
    else {
      this.setState({
      	left: this.state.left + (72),
      	top: this.state.top + (0),
        direction : 'right',
        position : {x : this.state.position.x + 1 , y : this.state.position.y}
      });
    }
  }

  moveUp() {
    this.setState({endFlag : false});
    if (this.state.direction === 'up' && this.state.position.y === 1){
      this.setState({endFlag : true});
    }
    else if (this.state.direction !== 'up'){
      this.setState({direction : 'up'});
    }
    else {
      this.setState({
      	left: this.state.left + (0),
      	top: this.state.top + (-72),
        direction : 'up',
        position : {x : this.state.position.x, y : this.state.position.y - 1}
      });
    }
  }

  moveDown() {
    this.setState({endFlag : false});
    if (this.state.direction === 'down' && this.state.position.y === 5){
      this.setState({endFlag : true});
    }
    else if (this.state.direction !== 'down'){
      this.setState({direction : 'down'});
    }
    else {
      this.setState({
      	left: this.state.left + (0),
      	top: this.state.top + (72),
        direction : 'down',
        position : {x : this.state.position.x, y : this.state.position.y + 1}
      });
    }
  }

  handleKeyPress = (event) => {
  console.log(event.key);
}

	render() {
  	return(
      <div style={{display : 'flex', padding: '50px'}} onKeyPress={this.handleKeyPress}>

      <div style={{width: '50%', textAlign : 'center'}}>
      <h2> Simple Robot with blue body and red head.</h2>
      <h3> Moves in the direction of the head. <br/>Use arrow keys or w,a,s,z or the button below to move.</h3>
      <Controls move={(e) => this.move(e)}/>
      {(this.state.endFlag) ? <h3> You reached the end of the grid!</h3> : null}
      </div>
      <div style={{padding : '30px'}}>
      <Grid left={this.state.left} top={this.state.top} direction={this.state.direction}/>
      </div>
    </div>)
  }
}

export default App;
