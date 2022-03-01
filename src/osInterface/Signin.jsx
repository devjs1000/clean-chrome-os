import React, { useState, useContext } from 'react';
import { contxt } from '../context/mainContext';
export default () => {
  const ctx = useContext(contxt);
  const signin = () => {
    ctx.setSignWall(false);
  };
  return (
    <div className="uni-center w-full h-full">
      <div className="center">
        <div>
          <img src={ctx.profile} alt={ctx.name} className="rounded-full" />
        </div>
        <input
          type="text"
          className="rounded-full my"
          placeholder="@password"
        />
        <br />
        <button className="rounded-full my hover-lift " onClick={signin}>
          sign in
        </button>
      </div>
    </div>
  );
};
