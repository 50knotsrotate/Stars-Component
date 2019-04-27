import React from 'react';
import '../App.css';

export default function Stars(props){
  return(
    <div className = {props.isLit ? 'star' : 'nostar'} onMouseOver = {props.hover} onClick = {props.submit}>

    </div>
  )
}
