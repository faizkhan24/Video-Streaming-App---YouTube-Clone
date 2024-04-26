
import {createSlice}  from '@reduxjs/toolkit'


const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
        showFilterList: true,
    },

    reducers: {
        toggleMenu: (state,action) =>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) =>{
            state.isMenuOpen = false;
        },
        hideFilterList:(state) =>{
            state.showFilterList = false;
        }
    }
})

export const {toggleMenu,closeMenu, hideFilterList} = appSlice.actions;

export default appSlice.reducer;