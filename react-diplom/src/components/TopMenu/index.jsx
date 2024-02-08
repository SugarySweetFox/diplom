import { Routes, Route, Outlet, Link, NavLink } from "react-router-dom";
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
                links.map(l => <NavLink to={l.url} key={l.name} >{l.name}</NavLink>)
            }
           {!user ?  <><NavLink to="/sign_in">Вход</NavLink>
            <NavLink to="/sign_up">Регистрация</NavLink></> : <><NavLink to="/profile">Профиль</NavLink><Link onClick={(e)=>{e.preventDefault(); removeUser(); setUser(null)}}>Выйти</Link></>}
        </div>
    </>
}

export default TopMenu;