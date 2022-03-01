import React, {useContext, useState} from 'react';
import Drawer from './Drawer'
import {contxt} from '../../context/mainContext'
export default ()=>{
  const ctx = useContext(contxt);

  return (
    <div>
      <div>
        <div onClick={()=>{
          ctx.drawer?
          ctx.setDrawer(false):
          ctx.setDrawer(true)
        }} className='p-1 bg-op-black rounded-full' style={{height:'1.5rem', width:'1.5rem'}}>
        <svg className="svg-icon " viewBox="0 0 20 20">
							<path fill="none" d="M10,0.562c-5.195,0-9.406,4.211-9.406,9.406c0,5.195,4.211,9.406,9.406,9.406c5.195,0,9.406-4.211,9.406-9.406C19.406,4.774,15.195,0.562,10,0.562 M10,18.521c-4.723,0-8.551-3.829-8.551-8.552S5.277,1.418,10,1.418s8.552,3.828,8.552,8.551S14.723,18.521,10,18.521"></path>
						</svg>
        </div>
      </div>
 <div>
        <Drawer />
        </div>
    </div>
  )
}