import { createSlice } from "@reduxjs/toolkit";

const LanguageSlice = createSlice({
    name: "lang",
    initialState: {
        language: "en"
    },
    reducers: {
        changeLanguage: function (state, action) {
            state.language = action.payload;
        },
    },

});
export const { changeLanguage } = LanguageSlice.actions;
export default LanguageSlice.reducer;