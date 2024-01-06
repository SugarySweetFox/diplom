import { Routes, Route, Outlet, Link } from "react-router-dom";
import  classes from "./index.module.css";
import ModelsPage from "../ModelsPage";
import Sign_inPage from "../Sign_inPage";
import Sign_upPage from "../Sign_upPage";
import ProfilePage from "../ProfilePage";


const TopMenu = () => {
    return <>
        <div className={classes.menu}>
        <Link to={"/"}>Главная</Link>
        <Link to={"/models"}>Модели</Link>
        <Link to={"/sign_in"}>Вход</Link>
        <Link to={"/sign_up"}>Регистрация</Link>
        <Link to={"/profile"}>Профиль</Link>
        </div>
        
        
        <Routes>
            <Route path="/" Component={() => { return <p></p> }} />
            <Route path="/models" Component={ModelsPage} />
            <Route path="/sign_in" Component={Sign_inPage} />
            <Route path="/sign_up" Component={Sign_upPage} />
            <Route path="/profile" Component={ProfilePage} />
        </Routes>
    </>
}

export default TopMenu;