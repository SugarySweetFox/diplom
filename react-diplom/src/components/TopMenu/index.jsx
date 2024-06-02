import { Routes, Route, Outlet, Link, NavLink } from "react-router-dom";
import classes from "./index.module.css";
import links from "../../shared/links";
import { getUser, isAdmin, removeUser } from "../../store/storage";
import { useEffect, useState } from "react";


const TopMenu = ({user, setUser}) => {

    const [activeMenu, setActiveMenu] = useState(false);
    useEffect(()=>{
        console.log(user);
    },[])
    return <>
        <div onClick={()=>setActiveMenu(!activeMenu)} className={activeMenu ? classes.burger  + ' ' + classes.active : classes.burger }>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className={activeMenu ? classes.menu : classes.menu + ' ' + classes.hide}>
            {
                links.map(l => <NavLink to={l.url} key={l.name} >{l.name}</NavLink>)
            }
            { isAdmin() ? <NavLink to="/admin">Админ панель</NavLink> : <></> }
            { !isAdmin() && user ? <NavLink to="/message">Сообщения</NavLink> : <></> }
            {/* { !isAdmin() && user ? <NavLink to="/chat">Chat</NavLink> : <></> } */}
            { !isAdmin() && user ? <NavLink to="/profile">Профиль</NavLink> : <></> }
            
           {!user ?  <><NavLink to="/sign_in">Вход</NavLink>
            <NavLink to="/sign_up">Регистрация</NavLink></> : <><Link onClick={(e)=>{e.preventDefault(); removeUser(); setUser(null)}}>Выйти</Link></>}

        </div>
    </>
}

export default TopMenu;