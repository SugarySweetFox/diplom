import { Routes, Route, Outlet, Link } from "react-router-dom";
import  classes from "./index.module.css";
import ModelsPage from "../ModelsPage";


const TopMenu = () => {
    return <>
        <div className={classes.menu}>
        <Link to={"/"}>main</Link>
        <Link to={"/models"}>Модели</Link>
        </div>
        
        
        <Routes>
            <Route path="/" Component={() => { return <p>main</p> }} />
            <Route path="/models" Component={ModelsPage} />
        </Routes>
    </>
}

export default TopMenu;