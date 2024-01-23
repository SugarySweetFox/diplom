import  classes from "./index.module.css";
import PostModels from "../PostModel";
import { useEffect, useState } from "react";
import axios from "axios";



const ModelsPage=()=>{
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:3001/api/models').then((data) => {
            console.log(data.data)
            setPosts(data.data);
        })
    }, []);


    return <>
    <div className={classes.line} />
        <div className={classes.container}>
            {posts.map((post) => {
                return <PostModels name={post.name} user={post.user.name} city={post.city.name} search={post.search.name} type={post.type.name} age={post.user.birthday} about={post.about_me}/>
            })}
            
            
        </div>
    </>
}
export default ModelsPage;