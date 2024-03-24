import React from 'react';
import videoSRC from '../../assets/sample.mp4';
import {Video} from './styles';

const VideoPlayer = () => {
  return (
    <Video controls>
        <source src={videoSRC} type='video/mp4'/>
    </Video>
  );
}

export default VideoPlayer;