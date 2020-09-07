import React from 'react';


import GalleryGridContainer from './features/gallery/gallery-grid/GalleryGridContainer';

import { GlobalStyles } from './App.globalstyles'

function App() {


  return (
    <>
    <GlobalStyles />
    <div className='App'>
      <header>  
        <h1 className="title">Trade<span>Rev</span> Image Gallery</h1>
        <p className="cory"style={{marginTop:0}}>by Cory Catherall</p>
      </header>
      <GalleryGridContainer/>
    </div>
    </>
  );
}

export default App;
