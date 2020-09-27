import React from "react";
import classes from './HideButton.module.css';
import cn from 'classnames';
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";


const HideButton = React.memo((props) => {
  const hideButtonRef = useRef(null);
  let currentMarginLeft = props.isVisible ? '408px' : '8px';
  useEffect(() => {    
    hideButtonRef.current.style.left = currentMarginLeft
    console.log(currentMarginLeft)
  }, [props.isVisible])

  let tooltipText = props.isVisible ? 'Скрыть боковую панель' : 'Показать боковую панель'

  const isVisibleToggle  = () => {
    props.isVisibleToggle(prev => !prev);
  }

    
  
    return(
    <div ref={hideButtonRef} className = {cn(classes.hideButton, classes.tooltip)} data-tooltip={tooltipText} onClick = {()=>isVisibleToggle()}>{props.isVisible ? <span>&#9668;</span> : <span>&#9658;</span>}</div>
    )
  })

export default HideButton;