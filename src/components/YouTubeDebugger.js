// Code YouTubeDebugger Component Here
import React, {Component} from 'react';
class YouTubeDebugger extends Component{

  state= {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }
changeBitrate = ()=>{
  this.setState({
    settings:{
      ...this.state.settings,
      bitrate:12
    }
  })
}
changeRes = () => {
  this.setState({
    settings: Object.assign({}, this.state.settings,{
      video: Object.assign({}, this.state.settings.video,{
        resolution: '720p'
      })
    })
  })
}
  render(){
    console.log(this.state)
    return(
      <div>
      <button className="bitrate" onClick={this.changeBitrate}>bitrate</button>,

      <button className="resolution" onClick={this.changeRes}>resolution</button>
      </div>
    )
  }
}
export default YouTubeDebugger
