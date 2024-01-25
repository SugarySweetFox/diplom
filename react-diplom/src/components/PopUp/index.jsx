import  classes from "./index.module.css";

const PopUp=({message = "успешно", setIsActive})=>{
    return <div className={classes.blok}>
        <h3>{message}</h3>
        <button className={classes.center} onClick={()=>setIsActive(false)}>Ок</button>
    </div>
}
export default PopUp;