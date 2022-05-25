import { useEffect, useState } from "react"
import RecipeReviewCard from "../components/CardPost"
import {getPost, getComments, getUsers, getTag } from "../services/Post.service"

const Home = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        getPost().then(res => {console.log("la respuesta ", res); setPosts(res.data)})
    },[])
    //const posts = getPost()
    /* useEffect(() => {
        const consultar = async () => {
            const data = await getPost()
            console.log("estos son los psot", data)
            setPosts(data)
        }
        consultar()
    }, []) */
    getComments()
    getUsers()
    getTag()
    
    return (
        <div>Home
            {posts?.map(post => <RecipeReviewCard key={post.id} post={post}/>)}
        </div>
    )
}

export default Home