import React from 'react';
import classes from './Googlemaps.module.css';
import bgImgUrl from './../../img/map.png'

const Googlemaps = (props) => {

  const bgShape = {
    top: '0px',
    minHeight: `100%`,
    minWidth: `100%`,
    background: `center center no-repeat url(${bgImgUrl})`,
    backgroundSize: `cover`,
    position: `absolute`,
    zIndex: 0,
  }
  return(
    <div style = {bgShape}>

    </div>
  )
}

export default Googlemaps;