import React from 'react';


import GalleryGridContainer from './features/gallery/gallery-grid/GalleryGridContainer';

import './App.css';

function App() {


  return (
    <div className='App'>
      <header>  
        <h1 style={{marginBottom: 0}}>Trade <span>Rev</span> Image Gallery</h1>
      <p style={{marginTop:0}}>by Cory Catherall</p>
      </header>
      <GalleryGridContainer/>
    </div>
  );
}

export default App;
