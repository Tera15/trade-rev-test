import React, {useState, useLayoutEffect, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import GalleryModal from './GalleryModal.component'
import { selectAllImages, selectDidImagesLoad, selectImageIdx, selectSingleImage, selectImageById, getNext, getPrev, setIdx } from '../gallerySlice'



function GalleryModalContainer ({ match }) {
    var [currentImage, setCurrentImage] = useState(0)
    var selectUrl = useSelector(state => state.gallery.currentImg)
    var isLoaded = useSelector(selectDidImagesLoad)
    var imgIdx = useSelector(selectImageIdx)
    let galleryImage = useSelector(selectImageById)
    const dispatch = useDispatch()
    var { id } = match.params
    let idx = id
    console.log(selectUrl)
    useLayoutEffect(() => {
        dispatch((setIdx(idx)))
        console.log(imgIdx)
    },[currentImage])
    useEffect(() => {

    },[match])

    console.log(galleryImage, 'gallery')
    //TODO: CHANGE LOCATION OF SETCURRENTIMAGE 
    if (isLoaded){
        let image = galleryImage
        return (
            <>
            
            <GalleryModal image={image}  />
            <Link onClick={() => setCurrentImage(currentImage += 1)} to={`/modal/${selectUrl[currentImage]}`} >Next</Link>
            <Link onClick={() => setCurrentImage(currentImage -= 1)} to={`/modal/${selectUrl[currentImage]}`} >prev</Link>
            <Link onClick={() => setCurrentImage(currentImage -= 1)} to='/'>close</Link>
            {/* <button onClick={() => dispatch(getNext())} type="button">next</button>
            <button onClick={() => dispatch(getPrev())} type="button">prev</button> */}
            </>
        )
        
        
    } else {
        return <div>loading....</div>
    }
}


export default GalleryModalContainer