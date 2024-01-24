import  classes from "./index.module.css";
import like from "../../img/like.svg";

const PostModels=({name, city, search, about, user, service})=>{
    return <div className={classes.post}> 
                <div className={classes.top_post}>
                    <div className={classes.photo}>
                        <div className={classes.div_okr}></div>
                        <img src="" alt="" />
                        <div className={classes.div_border}></div>
                    </div>
                    <div className={classes.content}>
                        <h2 className={classes.left}>{name}</h2>
                        <div className={classes.content_text}>
                            <div className={classes.text_post}>
                                <h5>Aвтор:</h5>
                                <h4>{user}</h4>
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
                    <img src={like} alt="" className={classes.img_like}/>
                </div>
                <div className={classes.bottom_post}>
                    <button className={classes.filled_btn}>Написать</button>
                </div>
    </div>
}
export default PostModels;