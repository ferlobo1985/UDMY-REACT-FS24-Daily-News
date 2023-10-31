import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchPostById } from "../../store/utils/thunks";
import { clearPostById } from '../../store/reducers/posts'
import Moment from "react-moment";


const PostComponent = () => {
    const posts = useSelector((state)=> state.posts);
    const dispatch = useDispatch();
    let params = useParams();

    useEffect(()=>{
        dispatch(fetchPostById(params.id))
    },[])


    useEffect(()=>{
        return()=>{
            dispatch(clearPostById())
        }
    },[])


    return(
        <>
            { posts.postById ?
            <div className="article_container">
                <h1>{posts.postById.title}</h1>
                <div
                    style={{
                        background:`url(${posts.postById.imagexl})`
                    }}
                    className="image"
                ></div>
                <div className="author">
                    Created by: <span>{posts.postById.author} - </span>
                    <Moment format="DD MMMM">
                        {posts.postById.createdAt}
                    </Moment>
                </div>
                <div className="mt-3 content">
                    <div
                        dangerouslySetInnerHTML={{
                            __html:posts.postById.content
                        }}
                    ></div>
                </div>
            </div>
            :null}
        </>
    )
}

export default PostComponent;