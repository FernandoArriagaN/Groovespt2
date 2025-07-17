import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAlbums = createAsyncThunk(
  'albums/fetchAlbums',
  async (artistId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${artistId}/albums`
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue("no se puede cargaer albums");
    }
  }
);

const albumsSlice = createSlice({
  name: 'albums',
  initialState: {
    albums: [],
    loading: false,
    error: null,
  },
  reducers: {
    resetAlbums: (state) => {
      state.albums = [];
      state.loading = false;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAlbums.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.albums = [];
      })
      .addCase(fetchAlbums.fulfilled, (state, action) => {
        state.loading = false;
        state.albums = action.payload;
      })
      .addCase(fetchAlbums.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { resetAlbums } = albumsSlice.actions;
const {reducer: albumReducer} = albumsSlice;
export default albumReducer;
