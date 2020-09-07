import React from 'react';

import GalleryGrid from './GalleryGrid.component';

import { useSelector } from 'react-redux';


import { selectDidImagesLoad } from '../gallerySlice'


function GalleryGridContainer () {
    var isLoaded = useSelector(selectDidImagesLoad)

    if (isLoaded) {
        return <GalleryGrid />
    } else {
        return <div>loadin...</div>
    }

}

export default GalleryGridContainer;