import { useEffect, useState } from "react";
import  classes from "./index.module.css";
import axios from 'axios';
import { Link } from "react-router-dom";

const ProfilePage=()=>{


    const [user, setUser] = useState();

    useEffect(() => {
        axios.get('http://127.0.0.1:3001/api/users/1').then((data) => {
            console.log(data.data)
            setUser(data.data);
        })
    }, []);


    return <div className={classes.container}>
            <div className={classes.profile}>
                <div className={classes.profile_top}>
                    <div className={classes.div_first_btn}>
                        <p className={classes.center}>Профиль</p>
                    </div>
                    <Link to="/portfolio"><button className={classes.post_btn}>Портфолио</button></Link>
                    <Link to="/myposts"><button className={classes.post_btn}>Мои объявления</button></Link>
                </div>
                <div className={classes.profile_div}>
                    <div className={classes.top_post}>
                        <div className={classes.photo}>
                            <div className={classes.div_okr}></div>
                            <img src="" alt="" />
                            <div className={classes.div_border}></div>
                        </div>
                        <div className={classes.content}>
                            <h2 className={classes.left}>{user?.name}</h2>
                            <div className={classes.content_text}>
                                <div className={classes.text_post}>
                                    <h5>Город:</h5>
                                    <h4>{user?.city.name}</h4>
                                </div>
                                <div className={classes.text_post}>
                                    <h5>Дата рождения:</h5>
                                    <h4>{new Date(user?.birthday).toLocaleDateString()}</h4>
                                </div>
                                <div className={classes.text_post}>
                                    <h5>Я:</h5>
                                    <h4>{user?.activity.name}</h4>
                                </div>
                                <div className={classes.text_post}>
                                    <h5>Пол:</h5>
                                    <h4>{user?.gender.name}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.bottom_post}>
                    <a><button className={classes.border_btn}>Редактировать</button></a>
                    </div>
                </div>
            </div> 
            
        </div>
}
export default ProfilePage;