import  classes from "./index.module.css";
import Post from "../Post";

const ModelsPage=()=>{
    return <>
    <div className={classes.line} />
        <div className={classes.container}>
            <Post />
        </div>
    </>
}
export default ModelsPage;