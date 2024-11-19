import { configureStore } from "@reduxjs/toolkit";
import LanguageSlice from "./slice/language";
import FavSlice from './slice/favmovie'

const Store = configureStore({
    reducer: {
        language: LanguageSlice,
        favorites: FavSlice
    }
})
export default Store;