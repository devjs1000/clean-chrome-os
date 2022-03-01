import React,{useState, useContext} from 'react'
import {contxt} from '../../context/mainContext'
import Apk from '../../features/Apk'
export default ()=>{
  const ctx=useContext(contxt)
  return (
    <div>
    {ctx.apps.map(a=>{
      return (
        <Apk manifest={a} key={a.key} />
      )
    })}
    </div>
  )
}