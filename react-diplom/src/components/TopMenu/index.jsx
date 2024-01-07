import { Routes, Route, Outlet, Link } from "react-router-dom";
import classes from "./index.module.css";
import links from "../../shared/links";


const TopMenu = () => {
    return <>
        <div className={classes.menu}>
            {
                links.map(l => <Link to={l.url} key={l.name} >{l.name}</Link>)
            }
        </div>
    </>
}

export default TopMenu;