import { Routes, Route, Outlet, Link } from "react-router-dom";
import classes from "./index.module.css";
import links from "../../shared/links";
import { getUser, removeUser } from "../../store/storage";
import { useEffect } from "react";


const TopMenu = ({user, setUser}) => {
    useEffect(()=>{
        console.log(user);
    },[])
    return <>
        <div className={classes.menu}>
            {
                links.map(l => <Link to={l.url} key={l.name} >{l.name}</Link>)
            }
           {!user ?  <><Link to="/sign_in">Вход</Link>
            <Link to="/sign_up">Регистрация</Link></> : <><Link to="/profile">Профиль</Link><Link onClick={(e)=>{e.preventDefault(); removeUser(); setUser(null)}}>Выйти</Link></>}
        </div>
    </>
}

export default TopMenu;