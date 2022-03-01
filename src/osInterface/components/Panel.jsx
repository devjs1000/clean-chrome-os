import React, { useState, useContext } from 'react';
import { contxt } from '../../context/mainContext';
import Bluetooth from './PanelInterface/Bluetooth';
import Wifi from './PanelInterface/Wifi';
import Accessibility from './PanelInterface/Accessibility';
import Profile from './PanelInterface/Profile';

export default ({ visibility }) => {
  const ctx = useContext(contxt);
  const [fullscreen, setFullscreen] = useState(false);
  return (
    <div>
      <div
        className="fixed right-0  bg-op-black my  text-white rounded-1"
        style={{
          transition: '.1s',
          overflow: 'hidden',
          bottom: 'calc(50px)',
          width: '300px',
          height: `${!visibility ? '0rem' : fullscreen ? '350px' : '250px'}`,
        }}
      >
        <div className="" style={{overflow:'hidden'}}>
          <div className="grid-6 my">
            <Profile />
            <div
              className=" rounded-full bg-op-black text-white uni-center p-1"
              style={{ fontSize: '.7rem', width:'3rem', height:'1rem' }}
            >
              sign out
            </div>
            <div className="icon-2 rounded-full icon-2 uni-center bg-op-black">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M7.5 1v7h1V1h-1z"/>
  <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"/>
</svg>
            </div>
            <div className="icon-2 rounded-full bg-op-black uni-center">
              <img
                src="https://img.icons8.com/material-outlined/24/ffffff/lock--v1.png"
                className="icon p-1"
              />
            </div>
            <div className="icon-2 bg-op-black rounded-full uni-center">
              <img
                src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/ffffff/external-setting-basic-ui-elements-flatart-icons-outline-flatarticons.png"
                className="icon p-1"
              />
            </div>
            <div className="icon-2 uni-center">
              <img
                src="https://img.icons8.com/material-rounded/24/ffffff/chevron-down.png"
                className="icons-2"
              />
            </div>
          </div>
          <div className="grid-3 my">
            <Wifi />
            <Bluetooth />
            <Accessibility />
          </div>
          <div className="p-1">
            <div className="uni-center my">
              <img
                src="https://img.icons8.com/ios/50/ffffff/sound-speaker.png"
                className="icon rounded-full bg-op-black p-1 mx"
              />

              <input type="range" style={{ width: '100%' }} onChange={(e)=>{
                ctx.setVolume(e.target.value)
              }} value={ctx.volume} min='1' max='10' />
            </div>
            <div className="uni-center my">
              <img
                src="https://img.icons8.com/ios/50/ffffff/sun.png"
                className="icon rounded-full bg-op-black p-1 mx"
              />

              <input type="range" style={{ width: '100%' }} value={ctx.brightness} onChange={(e)=>{
                ctx.setBrightness(e.target.value)
              }} min='1' max='10' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
