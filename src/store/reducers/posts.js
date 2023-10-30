import { createSlice } from '@reduxjs/toolkit';
/// import {} from '../utils/thunks';


export const postsSlice = createSlice({
    name:'posts',
    initialState:{
        loading:true,
        articles:{
            items:[]
        }
    },
    reducers:{}
});


export default postsSlice.reducer;