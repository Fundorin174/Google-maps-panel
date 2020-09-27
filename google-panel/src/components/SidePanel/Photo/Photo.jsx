import React from 'react';
import classes from './Photo.module.css'

const Photo = (props) => {


  return(
    <div className = {classes.photoImgItemWrp}>
          <img src={props.photo} alt=""/>
          <span>{props.text}</span>
        </div>
  )
}

export default Photo