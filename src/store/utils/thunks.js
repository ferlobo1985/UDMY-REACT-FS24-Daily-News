import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const URL_SERV = 'http://localhost:3001'


export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async({page=1,order='asc',limit=10})=>{
        try{

        /// http://localhost:3001/posts?_page=1&_limit=6&_order=desc&_sort=id
        const response = await axios.get(`${URL_SERV}/posts?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`);

        console.log(response);

        }catch(error){
            throw error
        }
    }
)