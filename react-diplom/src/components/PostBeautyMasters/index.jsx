import  classes from "./index.module.css";
import likeImg from "../../img/like.svg";
import delite from "../../img/delete.svg";
import likeImgActive from "../../img/like_active.svg"
import { useEffect, useState } from "react";
import { getUser } from "../../store/storage";
import axios from "axios";
import nophoto from "../../img/nophoto.png";
import { checkLike, dislike, like } from "../../utils/likes";
import { Link } from "react-router-dom";

const PostModels=({name, city, search, about, user, service, picture, post_id, refreshPosts, likes})=>{
    const [authUser, setAuthUser] = useState(getUser())
  
    const [isAuthor, setIsAuthor] = useState();

    useEffect(()=>{
        console.log("log AUth-> ", !!authUser);
        if (authUser){
            setIsAuthor(authUser.id === +user.id) 
        } else {
            setIsAuthor(false) 
        }
    }, [])

    



    function delitee(id) {
        if (window.confirm('Вы уверены?'))
        axios.delete(`http://localhost:3001/api/posts/${id}`).then((data) => {
            console.log(data);
            refreshPosts()
        })
    }
   

    return <div className={classes.post}> 
                <div className={classes.top_post}>
                    <div className={classes.photo}>
                        <div className={classes.div_okr}></div>
                            
                             {picture ?  <img className={classes.img} src={"http://localhost:3001/" + picture} alt="" /> : <img className={classes.img} src={nophoto} alt="" />}  
                             
                        <div className={classes.div_border}></div>
                    </div>
                    <div className={classes.content}>
                        <h2 className={classes.left}>{name}</h2>
                        <div className={classes.content_text}>
                            <div className={classes.text_post}>
                                <h5>Aвтор:</h5>
                                <h4>{user.name}</h4>
                            </div>
                            <div className={classes.text_post}>
                                <h5>Вид услуг:</h5>
                                <h4>{service}</h4>
                            </div>
                            <div className={classes.text_post}>
                                <h5>Город:</h5>
                                <h4>{city}</h4>
                            </div>
                            <div className={classes.text_post}>
                                <h5>Ищу:</h5>
                                <h4>{search}</h4>
                            </div>
                            <div className={classes.text_post}>
                                <h5>О себе:</h5>
                                <h4 className={classes.left}>{about}</h4>
                            </div>
                        </div>
                    </div>
                    {isAuthor ? <img onClick={() => {delitee(post_id)}} src={delite} className={classes.img_like}/>  : false}
                    {!!authUser && !isAuthor ? <><img src={checkLike(likes, authUser.id) ? likeImgActive : likeImg} alt="" onClick={ checkLike(likes, authUser.id) ? () => {dislike(post_id,  authUser.id); refreshPosts()} : () => {like(post_id,  authUser.id); refreshPosts()}} className={classes.img_like}/> 
                        <span>{likes?.length}</span>
                        </>:false}
                </div>
                <div className={classes.bottom_post}>
                    {authUser ?  <> <Link to={`/portfolio/${user.id}`}><button className={classes.border_btn}>Портфолио</button></Link> </> : <></>}
                    {authUser ?  <> <button className={classes.filled_btn}>Написать</button></> : <></>}
                </div>
    </div>
}
export default PostModels;