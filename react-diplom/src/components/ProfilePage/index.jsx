import  classes from "./index.module.css";

const ProfilePage=()=>{
    return <div className={classes.container}>
            <div className={classes.profile}>
                <div className={classes.profile_top}>
                    <div className={classes.div_first_btn}>
                        <p className={classes.center}>Профиль</p>
                    </div>
                    <a href=""><button className={classes.post_btn}>Портфолио</button></a>
                    <a href=""><button className={classes.post_btn}>Ваши объявления</button></a>
                </div>
                <div className={classes.profile_div}>
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
                                    <h5>Дата рождения:</h5>
                                    <h4>13.03.2003</h4>
                                </div>
                                <div className={classes.text_post}>
                                    <h5>Я:</h5>
                                    <h4>Модель</h4>
                                </div>
                                <div className={classes.text_post}>
                                    <h5>Пол:</h5>
                                    <h4>Женский</h4>
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