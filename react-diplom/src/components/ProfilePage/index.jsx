import { useEffect, useState } from "react";
import  classes from "./index.module.css";
import axios from 'axios';
import { Link } from "react-router-dom";
import { getUser } from "../../store/storage";
import nophoto from "../../img/nophoto.png";
import UpdateProfile from "../UpdateProfile";
import Preloader from "../Preloader";

const ProfilePage=()=>{
    const [isLoading, setIsLoading] = useState(true);
    const [authUser, setAuthUser] = useState(getUser());
    const [user, setUser] = useState();

    function updateUser(id) {
        axios.get(`http://127.0.0.1:3001/api/users/${id}`).then((data) => {
            console.log("useer-",data.data)
            setUser(data.data);
        })
    }

    useEffect(() => {
       if(authUser){
        updateUser(authUser.id, setUser) 
       } else {
           window.location.href = '/sign_in';
       }
       setTimeout(() => {
        setIsLoading(false)
    }, 1000);
    }, []);


    const [isActive, setIsActive] = useState(false);

    return <>{isActive&&<UpdateProfile updateUser={updateUser} user={user} setIsActive={setIsActive}/>}<div className={classes.container}>
        {isLoading && <Preloader/>}
            <div className={classes.profile}>
                <div className={classes.profile_top}>
                    <div className={classes.div_first_btn}>
                        <p className={classes.center}>Профиль</p>
                    </div>
                    <Link to="/portfolio"><button className={classes.post_btn}>Портфолио</button></Link>
                    <Link to="/myposts"><button className={classes.post_btn}>Мои объявления</button></Link>
                    <Link to="/like"><button className={classes.post_btn}>Избранное</button></Link>
                </div>
                <div className={classes.profile_div}>
                    <div className={classes.top_post}>
                        <div className={classes.photo}>
                            <div className={classes.div_okr}></div>
                                {user?.photo ?  <img className={classes.img} src={"http://localhost:3001/" + user?.photo} alt="" /> : <img className={classes.img} src={nophoto} alt="" />}
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
                                    <h5>Деятельность:</h5>
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
                    <a><button className={classes.border_btn} onClick={(e)=>setIsActive(true)}>Редактировать</button></a>
                    </div>
                </div>
            </div> 
            
        </div>
        </>
}
export default ProfilePage;