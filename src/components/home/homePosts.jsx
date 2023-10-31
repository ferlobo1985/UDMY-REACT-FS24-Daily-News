import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../store/utils/thunks";


const HomePosts = () =>{
    const homePosts = useSelector((state)=>state.posts)
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(fetchPosts({page:1,order:"desc",limit:6}))
    },[])


    return(
        <>
            home posts
        </>
    )
}

export default HomePosts;