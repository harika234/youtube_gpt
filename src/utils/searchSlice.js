import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'search',
    initialState: {

    },
    reducers: {
        // here we write actions ...
        cacheResults : (state,actions) => {
            
            state = Object.assign(state,actions.payload);
        }
    }
})

export const{cacheResults} = searchSlice.actions;
export default searchSlice.reducer;