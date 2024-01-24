import  classes from "./index.module.css";
import PostBeautyMasters from "../PostBeautyMasters";
import { useEffect, useState } from "react";
import axios from "axios";



const BeautyMastersPage=()=>{
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:3001/api/beautymasters').then((data) => {
            console.log(data.data)
            setPosts(data.data);
        })
    }, []);


    return <>
    <div className={classes.line} />
        <div className={classes.container}>
            {posts.map((post) => {
                return <PostBeautyMasters name={post.name} user={post.user.name} city={post.city.name} search={post.search.name} service={post.service.name}  about={post.about_me}/>
            })}
            
            
        </div>
    </>
}
export default BeautyMastersPage;