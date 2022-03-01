import React, { useState, useContext } from 'react';
import { contxt } from '../../context/mainContext';

export default () => {
  const ctx = useContext(contxt);
  const [fullscreen, setFullscreen]=useState(false)
  return (
    <div>
      <div
        className="fixed w-full bg-op-black my  text-white"
        style={{
          transition: '.3s',
          overflow: 'hidden',
          bottom: 'calc(50px)',
          height: `${!ctx.drawer ? `0rem` : `${fullscreen?'calc(100vh - 55px)':'20rem'}`}`,
        }}
      >
        <div className="uni-center">
          <div onClick={()=>{
            fullscreen?setFullscreen(false):setFullscreen(true)
          }} className='center rounded-full p-1 bg-op-black' style={{height:'1.5rem', width:'1.5rem'}}>
          <svg className="svg-icon" viewBox="0 0 20 20">
							<path d="M13.889,11.611c-0.17,0.17-0.443,0.17-0.612,0l-3.189-3.187l-3.363,3.36c-0.171,0.171-0.441,0.171-0.612,0c-0.172-0.169-0.172-0.443,0-0.611l3.667-3.669c0.17-0.17,0.445-0.172,0.614,0l3.496,3.493C14.058,11.167,14.061,11.443,13.889,11.611 M18.25,10c0,4.558-3.693,8.25-8.25,8.25c-4.557,0-8.25-3.692-8.25-8.25c0-4.557,3.693-8.25,8.25-8.25C14.557,1.75,18.25,5.443,18.25,10 M17.383,10c0-4.07-3.312-7.382-7.383-7.382S2.618,5.93,2.618,10S5.93,17.381,10,17.381S17.383,14.07,17.383,10"></path>
						</svg>
          </div>
        </div>
        <div className="center my">
          <input
            type="text"
            className="rounded-full"
            placeholder="search your favourite apps"
          />
        </div>
      </div>
    </div>
  );
};
