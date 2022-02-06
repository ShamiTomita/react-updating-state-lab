// Code DigitalClicker Component Here
import React, {Component} from 'react';

class DigitalClicker extends Component {

state = {
  timesClicked: 0
}

clicked = ()=>{
  this.setState({ timesClicked: this.state.timesClicked + 1})

}
  render (){
    console.log(this)
    return(
      <button className="clickButton" onClick={this.clicked}>{this.state.timesClicked}</button>
    )
  }
}
export default DigitalClicker
