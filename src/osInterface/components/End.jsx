import React, { useContext, useState, useEffect } from 'react';
import { contxt } from '../../context/mainContext';
import Panel from './Panel'
export default () => {
  const ctx = useContext(contxt);
  const [time, setTime] = useState();
  const [panel, setPanel]=useState(false)
  useEffect(() => {
    const timer = () => {
      let d = new Date();
      setTime(`${d.getHours()}:${d.getMinutes()}`);
    };
    let timeLoop = setInterval(timer, 1000);
  }, []);
  return (
    <div>
      <div
        className="round-set uni-center rounded-full bg-op-black gap-1"
        style={{ padding: '.3rem 1rem .3rem 1rem' }}
        onClick={()=>{
          panel?setPanel(false):setPanel(true)
        }}
      >
        <div className="">
          <svg className="svg-icon rounded-full" viewBox="0 0 20 20">
            <path d="M11.709,7.438H8.292c-0.234,0-0.427,0.192-0.427,0.427v8.542c0,0.234,0.192,0.427,0.427,0.427h3.417c0.233,0,0.426-0.192,0.426-0.427V7.865C12.135,7.63,11.942,7.438,11.709,7.438 M11.282,15.979H8.719V8.292h2.563V15.979zM6.156,11.709H2.74c-0.235,0-0.427,0.191-0.427,0.426v4.271c0,0.234,0.192,0.427,0.427,0.427h3.417c0.235,0,0.427-0.192,0.427-0.427v-4.271C6.583,11.9,6.391,11.709,6.156,11.709 M5.729,15.979H3.167v-3.416h2.562V15.979zM17.261,3.167h-3.417c-0.235,0-0.427,0.192-0.427,0.427v12.812c0,0.234,0.191,0.427,0.427,0.427h3.417c0.234,0,0.427-0.192,0.427-0.427V3.594C17.688,3.359,17.495,3.167,17.261,3.167 M16.833,15.979h-2.562V4.021h2.562V15.979z"></path>
          </svg>
        </div>

        <div>
          <svg className="svg-icon" viewBox="0 0 20 20">
            <path
              fill="none"
              d="M18.616,7.04h-0.638V5.305c0-0.448-0.362-0.813-0.813-0.813H1.407c-0.451,0-0.813,0.365-0.813,0.813v9.39c0,0.449,0.362,0.813,0.813,0.813h15.759c0.451,0,0.813-0.364,0.813-0.813v-1.667h0.638c0.451,0,0.813-0.362,0.813-0.813V7.852C19.429,7.403,19.067,7.04,18.616,7.04z M16.353,13.883H2.22V6.117h14.133v1.735v4.364V13.883z"
            ></path>
          </svg>
        </div>
        <div className="text-white ">{time}</div>
      </div>
      <Panel visibility={panel}/>
    </div>
  );
};
