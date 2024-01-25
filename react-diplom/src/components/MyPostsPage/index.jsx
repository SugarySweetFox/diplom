import { useEffect, useState } from "react";
import  classes from "./index.module.css";
import axios from 'axios';
import { Link } from "react-router-dom";

const MyPostPsge=()=>{


    const [user, setUser] = useState();

    useEffect(() => {
        axios.get('http://127.0.0.1:3001/api/users/1').then((data) => {
            console.log(data.data)
            setUser(data.data);
        })
    }, []);


    return <div className={classes.container}>
            <div className={classes.profile}>
                <div className={classes.profile_top}>
                    <Link to="/profile"><button className={classes.post_btn}>Профиль</button></Link>
                    <Link to="/portfolio"><button className={classes.post_btn}>Портфолио</button></Link>
                    <div className={classes.div_first_btn}>
                        <p className={classes.center}>Ваши объявления</p>
                    </div>
                </div> 
                <div className={classes.profile_div}>
                    <div className={classes.center}>
                        <button className={classes.filled_btn}>Добавить</button>
                    </div>
                        
                </div>              
            </div>            
        </div>
}
export default MyPostPsge;