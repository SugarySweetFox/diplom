import TopMenu from "../TopMenu";
import  classes from "./index.module.css";

const Header=()=>{
   
    return <div className={classes.container}>
        <div className={classes.header}>
            <div className={classes.logo}></div>
            <TopMenu/>
        </div>
    </div>
}

export default Header;