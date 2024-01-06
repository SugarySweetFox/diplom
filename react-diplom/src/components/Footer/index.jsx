import TopMenu from "../TopMenu";
import  classes from "./index.module.css";

const Footer=()=>{
   
    return <div className={classes.container}>
        <div className={classes.footer}>
            <div className={classes.menu_footer}>
                <TopMenu/>
            </div>
            <div className={classes.left_footer}>
                    <p>implement.the.idea@gmail.com</p>
                    <div className={classes.vk}></div>
            </div>
        </div>
    </div>
}

export default Footer;