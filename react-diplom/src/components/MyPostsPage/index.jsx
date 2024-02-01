import { useEffect, useState } from "react";
import  classes from "./index.module.css";
import axios from 'axios';
import { Link } from "react-router-dom";
import PostPhotografs from "../PostPhotografs";
import PostBeautyMasters from "../PostBeautyMasters";
import PostModels from "../PostModel";
import { getUser } from "../../store/storage";
import FormPage from "../FormPage"; 

const MyPostPage=()=>{

    const [authUser, setAuthUser] = useState(getUser());

    const [postsbeautymasters, setPostsbeautymasters] = useState([])

    const [postsphotografs, setPhotografs] = useState([])

    const [postsmodels, setModels] = useState([])

    const [userId, setUserId] = useState(getUser().id);


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

    const [isActive, setIsActive] = useState(false);




    return <>{isActive&&<FormPage userId={userId} setIsActive={setIsActive}/>}<div className={classes.container}>
            <div className={classes.profile}>
                <div className={classes.profile_top}>
                    <Link to="/profile"><button className={classes.post_btn}>Профиль</button></Link>
                    <Link to="/portfolio"><button className={classes.post_btn}>Портфолио</button></Link>
                    <div className={classes.div_first_btn}>
                        <p className={classes.center}>Ваши объявления</p>
                    </div>
                    <Link to="/like"><button className={classes.post_btn}>Избранное</button></Link>
                </div> 
                <div className={classes.profile_div}>
                    <div className={classes.center}>
                        <button className={classes.filled_btn} onClick={(e)=>setIsActive(true)}>Добавить</button>
                    </div>
                    {userId && postsbeautymasters.map((post) => {
                        return post.user.id === userId ? <PostBeautyMasters name={post.name} picture={post.picture} user={post.user.name} city={post.city.name} search={post.search.name} service={post.service?.name}  about={post.about_me}/> : false
                    })}
                    {userId && postsphotografs.map((post) => {
                        return post.user.id === userId ? <PostPhotografs name={post.name} picture={post.picture} user={post.user.name} city={post.city.name} search={post.search.name} type={post.type?.name} about={post.about_me}/> : false
                    })}
                    {userId && postsmodels.map((post) => {
                        return post.user.id === userId ? <PostModels name={post.name} picture={post.picture} user={post.user.name} city={post.city.name} search={post.search.name} type={post.type?.name} age={post.user.birthday} about={post.about_me}/> : false 
                    })}
                </div>              
            </div>            
        </div>
        </>
}
export default MyPostPage;