import React from 'react';

import './Components/style.css';
import Contact from './Components/Contact'



function App() {
  return (
    <div className="App">
      <Contact name="Gavin Martin" avatar="https://randomuser.me/api/portraits/men/85.jpg" onLine/>
      <Contact name="Timothee Jonhson" avatar="https://randomuser.me/api/portraits/men/1.jpg" onLine/>
      <Contact name="Mildred Henderson" avatar="https://randomuser.me/api/portraits/women/90.jpg" 
    />
    </div>
  );
}

export default App;


