import { useEffect, useState } from "react";
import  classes from "./index.module.css";
import axios from 'axios';
import { Link } from "react-router-dom";
import PostPhotografs from "../PostPhotografs";
import PostBeautyMasters from "../PostBeautyMasters";
import PostModels from "../PostModel";

const MyPostPsge=()=>{

    const [postsbeautymasters, setPostsbeautymasters] = useState([])

    const [postsphotografs, setPhotografs] = useState([])

    const [postsmodels, setModels] = useState([])

    const [userId, setUserId] = useState(1);


    useEffect(() => {
        axios.get('http://127.0.0.1:3001/api/beautymasters').then((data) => {
            console.log(data.data)
            setPostsbeautymasters(data.data);
        })
        axios.get('http://127.0.0.1:3001/api/photografs').then((data) => {
            console.log(data.data)
            setPhotografs(data.data);
        })
        axios.get('http://127.0.0.1:3001/api/models').then((data) => {
            console.log(data.data)
            setModels(data.data);
        })
    }, []);


    return <div className={classes.container}>
            <div className={classes.profile}>
                <div className={classes.profile_top}>
                    <Link to="/profile"><button className={classes.post_btn}>Профиль</button></Link>
                    <Link to="/portfolio"><button className={classes.post_btn}>Портфолио</button></Link>
                    <div className={classes.div_first_btn}>
                        <p className={classes.center}>Ваши объявления</p>
                    </div>
                </div> 
                <div className={classes.profile_div}>
                    <div className={classes.center}>
                        <button className={classes.filled_btn}>Добавить</button>
                    </div>
                    {postsbeautymasters.map((post) => {
                        return post.user.id === userId ? <PostBeautyMasters name={post.name} user={post.user.name} city={post.city.name} search={post.search.name} service={post.service.name}  about={post.about_me}/> : false
                    })}
                    {postsphotografs.map((post) => {
                        return post.user.id === userId ? <PostPhotografs name={post.name} user={post.user.name} city={post.city.name} search={post.search.name} type={post.type.name} about={post.about_me}/> : false
                    })}
                    {postsmodels.map((post) => {
                        return post.user.id === userId ? <PostModels name={post.name} user={post.user.name} city={post.city.name} search={post.search.name} type={post.type.name} age={post.user.birthday} about={post.about_me}/> : false 
                    })}
                </div>              
            </div>            
        </div>
}
export default MyPostPsge;