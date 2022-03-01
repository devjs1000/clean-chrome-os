import React, { useState, useContext } from 'react';
import './style.css';
import Signin from './osInterface/Signin';
import Desktop from './osInterface/Desktop';
import { contxt } from './context/mainContext';
import Bar from './osInterface/Bar';
export default function App() {
  const ctx = useContext(contxt);
  return (
    <div style={{filter:`brightness(${ctx.brightness*10}%)`}}>
      {!ctx.signWall ? (
        <div>
          <Desktop />
          <Bar />
        </div>
      ) : (
        <Signin />
      )}
    </div>
  );
}
