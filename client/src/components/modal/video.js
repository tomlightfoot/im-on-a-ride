import React, { Component } from 'react';
import YouTube from 'react-youtube';

class Video extends Component {
  render() {
    const opts = {
      height: '60%',
      width: '100%',
      playerVars: {
        autoplay: 0,
        controls: 1
      }
    }

    return(
      <YouTube
        videoId={this.props.feature}
        opts={opts}
        onReady={this._onReady}
      />
    )
  }
}

export default Video
