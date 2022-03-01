import React,{useContext, useEffect, useState} from 'react' 
import {contxt} from './context/mainContext'

export default ({manifest})=>{
  
  return (
    <div>
      <div>
        <img src={manifest.icon} alt={manifest.name} className='icon-3' />
      </div>
    </div>
  )
}