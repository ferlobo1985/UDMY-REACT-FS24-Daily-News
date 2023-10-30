import { configureStore } from '@reduxjs/toolkit'
import PostsReducer from './reducers/posts';

export const store = configureStore({
    reducer:{
        posts:PostsReducer
    }
})