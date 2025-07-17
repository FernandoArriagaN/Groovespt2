import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchArtist = createAsyncThunk ('albums/fetchArtist', async (searchTerm, {rejectWithValue}) => {
    try {
            const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=${searchTerm}`);
            return response.data.data;
        } catch (error) {
            return rejectWithValue ("Error al buscar artistas")
        }
});

const searchSlice = createSlice ({
    name: 'search',
    initialState: {
        results: [],
        loading: false,
        error: null,
    }, 
    reducers: {
      resetResults: (state) => {
        state.results = [];
        state.loading = false;
        state.error = null;
            
        }
    },
    
    extraReducers:(builder) => {
        builder
        .addCase(fetchArtist.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.results= [];
        })
        .addCase(fetchArtist.fulfilled, (state, action) => {
            state.loading = false;
            state.results = action.payload;
        })
        .addCase (fetchArtist.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
});


export const { resetResults } = searchSlice.actions;
const {reducer: searchReducer } = searchSlice;
export default searchReducer;