import { useEffect, useState } from "react";
import  classes from "./index.module.css";
import axios from 'axios';
import { Link } from "react-router-dom";
import PostPhotografs from "../PostPhotografs";
import PostBeautyMasters from "../PostBeautyMasters";
import PostModels from "../PostModel";
import { getUser } from "../../store/storage";

const LikePage=()=>{

    const [authUser, setAuthUser] = useState(getUser());

    const [postsbeautymasters, setPostsbeautymasters] = useState([])

    const [like, setLike] = useState([])

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
        axios.get(`http://127.0.0.1:3001/api/likes/${userId}`).then((data) => {
            console.log(data.data)
            setLike(data.data);
        })
    }, []);





    return <><div className={classes.container}>
            <div className={classes.profile}>
                <div className={classes.profile_top}>
                    <Link to="/profile"><button className={classes.post_btn}>Профиль</button></Link>
                    <Link to="/portfolio"><button className={classes.post_btn}>Портфолио</button></Link>
                    <Link to="/myposts"><button className={classes.post_btn}>Мои объявления</button></Link>
                    <div className={classes.div_first_btn}>
                        <p className={classes.center}>Избранное</p>
                    </div>
                </div> 
                <div className={classes.profile_div}>
                {/* {userId && like.map((post) => {

                    switch(post.activities_id){
                        case 3: return <PostBeautyMasters name={post.name} user={post.user.name} city={post.city.name} search={post.search.name} service={post.service?.name}  about={post.about_me}/>
                        case 2: return <PostPhotografs name={post.name} user={post.user.name} city={post.city.name} search={post.search.name} type={post.type?.name} about={post.about_me}/>
                        case 1: return <PostModels name={post.name} user={post.user.name} city={post.city.name} search={post.search.name}  age={post.user.birthday} about={post.about_me}/>
                    }

                    })} */}
                 
                       
                       
                        {userId && postsbeautymasters.map((post) => {
                            
                                    return like.includes(post.id) ? <PostBeautyMasters name={post.name} picture={post.picture} user={post.user.name} city={post.city.name} search={post.search.name} service={post.service?.name}  about={post.about_me}/> : false
                            
                        })}
                        {userId && postsphotografs.map((post) => {
                         
                         return like.includes(post.id) ? <PostPhotografs name={post.name} picture={post.picture} user={post.user.name} city={post.city.name} search={post.search.name} type={post.type?.name} about={post.about_me}/> : false
                                
                        })}
                        { userId && postsmodels.map((post) => {
                            
                            return like.includes(post.id) ?  <PostModels name={post.name} picture={post.picture} user={post.user.name} city={post.city.name} search={post.search.name}  age={post.user.birthday} about={post.about_me}/> : false
       
                        })}
                        
                    
                </div>              
            </div>            
        </div>
        </>
}
export default LikePage;