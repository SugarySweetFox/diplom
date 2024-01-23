import classes from "./index.module.css";

const ProfilePage=()=>{
    return <div className={classes.bottom_left_index}>
        <a href=""><button className={classes.filled_btn}>Регистрация</button></a>
        <a href=""><button className={classes.border_btn}>Вход</button></a>
    </div>
}
export default ProfilePage;