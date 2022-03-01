import React, { createContext, useState } from 'react';

export const contxt = createContext();

export default function MainContext({ children }) {
  const [profile, setProfile] = useState(
    'https://i.ibb.co/tqMp6Db/profile.webp'
  );

  const [signWall, setSignWall] = useState(true);
  const [user, setUser] = useState('');
  const [wallpaper, setWallpaper]=useState('https://wallpapercave.com/wp/wp2561075.jpg')
  const [drawer, setDrawer]=useState(false)
  const [volume, setVolume]=useState(10)
  const [brightness, setBrightness]=useState(10)
  const [apps, setApps]=useState([
    {
      icon:'https://img.icons8.com/fluency/48/000000/linux-terminal.png',
      height:'full',
      width:'full',
      bar:true,
      status:false,
      name:'terminal',
      key:'com.terminal',
      theme:'dark',
      draggable:true,
      resizeable:true,
      hovered:'terminal',
      app:<div>app</div>,
      fullscreen:false,
      data:[]
    }
  ])
  return (
    <contxt.Provider
      value={{
        profile,
        setProfile,
        signWall,
        setSignWall,
        user,
        setUser,
        wallpaper,
        setWallpaper,
        drawer,
        setDrawer,
        volume,
        setBrightness,
        setVolume,
        brightness,
        apps,
        setApps
      }}
    >
      {children}
    </contxt.Provider>
  );
}
