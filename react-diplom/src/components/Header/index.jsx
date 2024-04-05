import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TopMenu from "../TopMenu";
import  classes from "./index.module.css";

const Header=({user, setUser})=>{
    const { pathname } = useLocation();
    const [isChat, setIsChat] = useState(false);
    useEffect(()=>{
        console.log('path', pathname);
        if(pathname === '/chat'){
            setIsChat(true);
        } else {
            setIsChat(false);
        }
    }, [pathname])
    return <div className={classes.container}>
        <div className={classes.header}>
            <div className={classes.logo}></div>
            {!isChat ? <TopMenu user={user} setUser={setUser}/> : false}
        </div>
    </div>
}

export default Header;