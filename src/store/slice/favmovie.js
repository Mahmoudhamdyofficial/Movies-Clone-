import { createSlice } from "@reduxjs/toolkit";

const FavSlice = createSlice({
    name: "favorites",
    initialState: {
        favorite: []
    },
    reducers: {
        makeFavorite: function (state, action) {
            const movie = action.payload;
            if (!state.favorite.find(item => item.id == movie.id))
                state.favorite.push(movie);
            // state.favorite = action.payload;
        },
        removeMovie: function (state, action) {
            const movieid = action.payload
            state.favorite = state.favorite.filter(item => item.id !== movieid)
        }
    },

});
export const { makeFavorite, removeMovie } = FavSlice.actions;
export default FavSlice.reducer;