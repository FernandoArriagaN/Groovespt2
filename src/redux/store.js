import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from "./slices/librarySlice";
import searchReducer from "./slices/searchSlice";
import albumReducer from "./slices/albumsSlice";

const store = configureStore({
    reducer: {
        search: searchReducer,
        albums: albumReducer,
        library: libraryReducer,
        
    }
});


export default store;