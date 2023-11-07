import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'

const CustomButton = (props) => {

    const snap = useSnapshot(state);

    const generateStyle = (type)=>{
        if(type==='filled'){
            console.log(snap.color);
            return{
                backgroundColor: snap.color,
                color:'#fff'
            }
        }
    }
  return (
    <button 
    onClick={props.handleClick}
    className={`px-2 py-1.5 flex-1 rounded-md ${props.customStyles}`}
    style={generateStyle(props.type)} 
     >
        {props.title}
    </button>
  )
}

export default CustomButton