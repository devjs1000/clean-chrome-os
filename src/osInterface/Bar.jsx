import React,{useState, useContext} from 'react'
import {contxt} from '../context/mainContext'
import PinArea from '../osInterface/components/PinArea'
import End from './components/End'
import Start from './components/Start'
import PinArea from './components/PinArea'
export default ()=>{
  return (
    <div>
      <div className='bg-op-black w-full fixed between bottom-0' style={{height:'50px'}}>
        <div className=""><Start/></div>
        <div className=""><PinArea/></div>
        <div className=""><End/></div>
      </div>
    </div>
  )
}