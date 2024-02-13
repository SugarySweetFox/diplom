import axios from "axios";
import { useContext, useEffect, useState } from "react";
import PopUp from "../PopUp";
import  classes from "./index.module.css";
import {Context} from "../../index.jsx"
import { jwtDecode } from "jwt-decode";
import { getUser, setUser } from "../../store/storage";


const SignInPage=()=>{
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

            console.log('=====auth start=====');
            console.log("token->", jwtDecode(data.data.token));
            console.log(data);
            setPopUpMessage(data.data.message)
            //decode 
            let user = {id: '', login: '', role: '', token: ''}
            user.token = data.data.token;
            user.id = jwtDecode(data.data.token).id;
            user.login = jwtDecode(data.data.token).login;
            user.role = jwtDecode(data.data.token).role;
            console.log('jwtDecode->', jwtDecode(data.data.token));
            setUser(user);
            localStorage.setItem('token', data.data.token)
            setIsActive(true)
            console.log('user->', getUser());
            console.log('=====auth end=====');
           
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

        <button className={classes.filled_btn} onClick={(e)=>signInForm(e)}>Войти</button>
    </div>
    </>
}
export default SignInPage;