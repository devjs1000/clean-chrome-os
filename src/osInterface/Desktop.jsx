import React, {useState, useContext} from 'react'
import {contxt} from '../context/mainContext'
import Pack from '../features/Pack'
export default ()=>{
  const ctx=useContext(contxt)
  return (
    <div className='' >
     
     <div className='w-full h-full' style={{backgroundImage:`url(${ctx.wallpaper})`, backgroundSize:'auto 100%'}}>
    {ctx.apps.map(a=>{
      return (
        <Pack  manifest={a} key={a.key}/>
      )
    })}
     </div>
    </div>
  )
}
