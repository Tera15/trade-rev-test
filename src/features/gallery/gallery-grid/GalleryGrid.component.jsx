import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useInView } from 'react-intersection-observer'
import { nanoid } from '@reduxjs/toolkit'

import { getImages, selectAllImages, selectDidImagesLoad } from '../gallerySlice'

import Image  from '../image/Image.component';
import { ImageGrid, Modal } from './gallery-grid.styles';



const GalleryGrid = () => {
    
    var dispatch = useDispatch()
    var galleryImages = useSelector(selectAllImages)
    var isLoaded = useSelector(selectDidImagesLoad)
    var status = useSelector(state => state.gallery.status);
    var page = useSelector(state => state.gallery.page)
    
    const [ref, inView] = useInView()
    const [modalState, setModal] = useState(false)
    const [currentImage, setCurrentImage] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    let imageRef = useRef([])
    const getModalImage = (index) => {
        if (isLoaded){
          return galleryImages.find((image, idx )=> {
                if (index === idx) {
                   return image
                }
                return null;
            })
          
        }
    }

    const handleImageClick = (i) => {
        var modalImages = getModalImage(i)
        setCurrentImage(modalImages)
        setCurrentIndex(i)
        setModal(true)
        
        
    }
   const handleNextImageClick = () => {
       if (currentIndex === galleryImages.length){
           
       }
    handleImageClick(currentIndex + 1)
   }
   const handlePrevImageClick = () => {
    if ( currentIndex === 0) {
        return
    }
    handleImageClick(currentIndex - 1)
   }
   const handleExit = () => {
       var i = currentIndex
       setModal(false)
       imageRef.current[i].scrollIntoView()
   }

    const renderedImages = () => {
        var key = nanoid()
        if (isLoaded) {
          return galleryImages.map((image, idx) => {
             
                const { urls: { regular }, alt_description } = image;
                return (
                    <div onClick={() => handleImageClick(idx)} ref={ref => {imageRef.current[idx] = ref}} >
                        <Image  key={key}  src={regular} alt={alt_description}  />
                    </div>
                )
            })
        }
        return 'loading...'
    };
    
    useEffect(() =>{
        if ((inView && (status !== 'loading' && status !== 'idle')) || (currentIndex === galleryImages.length)){
            dispatch(getImages(page))
            galleryImages.forEach((img, idx) => {
                return imageRef.current.push(idx)
            })
        } 
    },[inView])
    let imagesToDisplay = renderedImages()
   
    
    

    
    
  if (currentImage){
    var {urls:{small,regular}, user:{name}, alt_description} = currentImage
  }

    return(
        <>
            <ImageGrid modalState={modalState}>
                { imagesToDisplay }
                <div style={{height: '2rem'}} ref={ref}/>
                
            </ImageGrid>
            
            <Modal url={regular} phoneUrl={small} modalState={modalState} alt={alt_description} aria-label='image'>
                <button style={{alignSelf: "flex-start"}} onClick={handleExit} aria-label='Close'>X</button>
                <div className='button-container'>
                <button onClick={handlePrevImageClick}>&lt;</button>
                <h4>Photo by {name}</h4>
                <button onClick={handleNextImageClick}>&gt;</button> 
                </div>
            </Modal>
       </>
       
        
    );
}
export default GalleryGrid;

