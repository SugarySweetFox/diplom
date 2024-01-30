import  classes from "./index.module.css";
import like from "../../img/like.svg";
import { useState } from "react";
import { getUser } from "../../store/storage";

const PostPhotografs=({name, city, search, type, about, user, picture})=>{

    const [authUser, setAuthUser] = useState(getUser())

    return <div className={classes.post}> 
                <div className={classes.top_post}>
                    <div className={classes.photo}>
                        <div className={classes.div_okr}></div>
                            <img className={classes.img} src={"http://localhost:3001/" + picture} alt="" />
                        <div className={classes.div_border}></div>
                    </div>
                    <div className={classes.content}>
                        <h2 className={classes.left}>{name}</h2>
                        <div className={classes.content_text}>
                            <div className={classes.text_post}>
                                <h5>Автор:</h5>
                                <h4>{user}</h4>
                            </div>
                            <div className={classes.text_post}>
                                <h5>Город:</h5>
                                <h4>{city}</h4>
                            </div>
                            <div className={classes.text_post}>
                                <h5>Тип съемки:</h5>
                                <h4>{type}</h4>
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
                    <img src={like} alt="" className={classes.img_like}/>
                </div>
                <div className={classes.bottom_post}>
                    {authUser ?  <> <button className={classes.filled_btn}>Написать</button></> : <></>}
                </div>
    </div>
}
export default PostPhotografs;