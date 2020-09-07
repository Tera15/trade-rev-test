import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { ModalContainer } from './gallery-modal.styles';
import Image from '../image/Image.component';
import { selectAllImages, getNext, getPrev, selectImageIdx } from '../gallerySlice';

const GalleryModal = ({image}) => {
    const dispatch = useDispatch()
    let {urls:{small}, alt_description} = image
        if (image) {
            console.log(small)
        }
    return(
        <div style={{height: '100%', width: '100%', objectFit: ''}}>
        <Image src={small} alt={alt_description} />
        </div>
    );
}



export default GalleryModal