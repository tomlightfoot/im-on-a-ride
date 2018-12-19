import React, { Component } from 'react';
import YouTube from 'react-youtube';

class Video extends Component {
  render() {
    const opts = {
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
