import  classes from "./index.module.css";

function Preloader() {
    return (<div className={classes['lds-bg']}><div className={classes['lds-heart']}><div></div></div></div>);
}

export default Preloader;