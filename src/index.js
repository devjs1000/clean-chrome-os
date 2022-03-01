import React from 'react';
import ReactDOM from 'react-dom';
import MainContext from './context/mainContext';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <MainContext>
      <App />
    </MainContext>
  </React.StrictMode>,
  document.getElementById('root')
);

document.addEventListener('contextmenu',(e)=>{
  e.preventDefault()
}, false)