import classes from "./index.module.css";
import { Link } from "react-router-dom";

const ProfilePage=()=>{
    return <div className={classes.bottom_left_index}>
        <Link to="/sign_up"><button className={classes.filled_btn}>Регистрация</button></Link>
        <Link to="/sign_in"><button className={classes.border_btn}>Вход</button></Link>
    </div>
}
export default ProfilePage;