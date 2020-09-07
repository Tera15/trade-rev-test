import { createSlice, createAsyncThunk, nanoid, createSelector, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios'
import { useSelector } from 'react-redux';

export const getImages = createAsyncThunk('images/getImage', async (page) => {
   try{
    const response = await axios.get('https://api.unsplash.com/photos/',{
        params: {
        client_id: 'ww8w1GBGv37tWIfe_YyQEt6cYdC77Uktzol6cAP0YsQ',
        page
        }
    });
    return response.data

   } catch(error) {
       alert(error.message)
   }
  })


var initialState = {
    status: 'idle',
    images: [],
    currentImg: [],
    page: 0,
    idx: '',
    error: null,
}
export const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers:{
        setIdx: (state,  action ) => {
            
            state.idx = action.payload
        },
        getNext: (state) => {
            if (state.idx === state.images.length) return state.idx
                state.idx += 1
            
        },
        getPrev: (state) => {
            if (state.idx === 0) return 
                state.idx -= 1
            
        }

    },
    extraReducers:{
        [getImages.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getImages.fulfilled]: (state, action) => {
            state.status = 'success';
            state.page++
            action.payload.forEach((img, i) => state.currentImg.push(img.id))
            state.images = state.images.concat(action.payload)
            console.log(state.page, 'page')

        },
        [getImages.rejected]: (state, action) => {
            state.status = 'failed';
            console.log(state.status)
            state.error = action.error;
        }

    }
});

//actions here
export const { setIdx, getNext, getPrev } = gallerySlice.actions

//selectors here    
export const selectAllImages = state => state.gallery.images
export const selectDidImagesLoad = state => !!state.gallery.images
export const selectImageIdx = state => state.gallery.idx
export const selectImageUrls = state => state.gallery.currentImg
export const selectSingleImage = state => {
    let idx = state.gallery.idx
    console.log(state.gallery.images[idx].id, 'dadadadqrf')
    return state.gallery.images[idx]
}
export const selectImageById = (state) => {
    let id = state.gallery.idx
    let image = state.gallery.images.find(image => image.id === id )
    return image
}


export default gallerySlice.reducer;