import  classes from "./index.module.css";
import like from "../../img/like.svg";

const Post=()=>{
    return <div className={classes.post}> 
                <div className={classes.top_post}>
                    <div className={classes.photo}>
                        <div className={classes.div_okr}></div>
                        <img src="" alt="" />
                        <div className={classes.div_border}></div>
                    </div>
                    <div className={classes.content}>
                        <h2 className={classes.left}>Имя</h2>
                        <div className={classes.content_text}>
                            <div className={classes.text_post}>
                                <h5>Город:</h5>
                                <h4>Москва</h4>
                            </div>
                            <div className={classes.text_post}>
                                <h5>Возраст:</h5>
                                <h4>18</h4>
                            </div>
                            <div className={classes.text_post}>
                                <h5>Ищу:</h5>
                                <h4>Фотографа</h4>
                            </div>
                            <div className={classes.text_post}>
                                <h5>О себе:</h5>
                                <h4 className={classes.left}>Хочу красивую съемку в студии в новогоднем стиле</h4>
                            </div>
                        </div>
                    </div>
                    <img src={like} alt="" className={classes.img_like}/>
                </div>
                <div className={classes.bottom_post}>
                    <button>Написать</button>
                </div>
    </div>
}
export default Post;