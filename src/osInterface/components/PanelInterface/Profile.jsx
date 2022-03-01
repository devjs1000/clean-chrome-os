import React, { useContext, useState } from 'react';
import { contxt } from '../../../context/mainContext';

export default () => {
  const ctx=useContext(contxt)
  const [mine, setMine]=useState(false)
  return (
    <div>
      <div className="icon-area uni-center" >
        <div
          className=" rounded-full uni-center icon-2 mx"
          onClick={
            ()=>{
              setMine(true)
            }
          }
         
        >
        <img src={ctx.profile} className='rounded-full '  style={{width:'2rem', height:'2rem'}} />
        </div>
      </div>
      {mine && <div className=' absolute bottom-0' style={{width:'100%', height:'100%', backgroundColor:'rgb(50, 50, 50)'}}>
       <div className="p-1 between" >
       <img src={ctx.profile} className='rounded-full m-1'  style={{width:'2rem', height:'2rem'}} />
      <div className='text-white'>{ctx.user}</div>
      <div className="icon-2" onClick={()=>{
        setMine(false)
      }}>
      <img src="https://img.icons8.com/ios-glyphs/30/ffffff/multiply.png" className=""/>
      </div>
       </div>
       <hr/>
       <div className="text-white p-1">
         All available users have already been added to this session.
       </div>
        </div>}
    </div>
  );
};
