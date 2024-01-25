import axios from "axios";
import { useContext, useState } from "react";
import PopUp from "../PopUp";
import  classes from "./index.module.css";
import {Context} from "../../index.jsx"

const SignInPage=()=>{

    const {user} = useContext(Context)
    // user.set({name:'asdasd'});

    const [login, setLogin] = useState();

    const [password, setPassword] = useState();

    const [isActive, setIsActive] = useState(false);

    const [popUpMessage, setPopUpMessage] = useState("");

    const signInForm = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:3001/auth/login', {
                login: login,
                password: password,
        }).then(data=>{
            console.log(data);
            setPopUpMessage(data.data.message)
            localStorage.setItem('token', data.data.token)
            setIsActive(true)
        }).catch(data=>{
            console.log(data);
            setPopUpMessage(data.response.data.message)
            setIsActive(true)

        });
    }

    return <>{isActive&&<PopUp message={popUpMessage} setIsActive={setIsActive}/>}
    <div className={classes.block_brown}>
        <h3>Вход</h3>

            <div className={classes.inputs}>
                <div className={classes.input}>
                    <p>Логин</p>
                    <input type="text" placeholder="Логин" value={login} onChange={(e)=>{setLogin(e.target.value)}} /> 
                </div>
                <div className={classes.input}>
                    <p>Пароль</p>
                    <input type="text" placeholder="Пароль" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
            </div>

        <button className={classes.center} onClick={(e)=>signInForm(e)}>Войти</button>
    </div>
    </>
}
export default SignInPage;