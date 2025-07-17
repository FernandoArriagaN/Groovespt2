import { createSlice } from "@reduxjs/toolkit";

const librarySlice = createSlice ({
    name:  'library',
    initialState: {
        library: [],
    },
    reducers: {
        addAlbum: (state, action) => {
            state.library.push(action.payload)
        },
        removeAlbum: (state, action) => {
            state.library = state.library.filter(album => album.id !== action.payload)
        },
       
    },
});


export const {addAlbum, removeAlbum } = librarySlice.actions;
const { reducer: libraryReducer} = librarySlice
export default libraryReducer;