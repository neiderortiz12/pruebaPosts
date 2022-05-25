import { useEffect, useState } from "react"
import RecipeReviewCard from "../components/CardPost"
import {getPost, getComments, getUsers, getTag } from "../services/Post.service"

const Home = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        getPost().then(res => { setPosts(res.data)})
    },[])
    getComments()
    getUsers()
    getTag()
    
    return (
        <div>
            {posts?.map(post => <RecipeReviewCard key={post.id} post={post}/>)}
        </div>
    )
}

export default Home