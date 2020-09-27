import React, { useState } from 'react';
import './App.css';
import Googlemaps from './components/GoogleMaps/Googlemaps.jsx';
import HideButton from './components/HideButton/HideButton.jsx';
import SidePanel from './components/SidePanel/SidePanel.jsx';

function App() {
  const [isVisible, isVisibleToggle] = useState(true);

  return (
    <div className="App">
      {isVisible && <SidePanel />} 
      <HideButton isVisible = {isVisible} isVisibleToggle = {isVisibleToggle}/>
      <Googlemaps />
    </div>
  );
}

export default App;
