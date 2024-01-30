import TopMenu from "../TopMenu";
import  classes from "./index.module.css";

const Header=({user, setUser})=>{
   
    return <div className={classes.container}>
        <div className={classes.header}>
            <div className={classes.logo}></div>
            <TopMenu user={user} setUser={setUser}/>
        </div>
    </div>
}

export default Header;