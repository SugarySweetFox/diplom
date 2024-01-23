import axios from "axios";
import { useEffect, useState } from "react";
import  classes from "./index.module.css";

const SignUpPage=()=>{

    const [city, setCity] = useState([
        {
            name: "Moskoy",
        }
    ]);

    useEffect(() => {
        axios.get('http://127.0.0.1:3001/api/cities').then((data) => {
            console.log(data.data)
            setCity(data.data);
        })
    }, []);


    return <div className={classes.block_brown}>
        <h3>Вход</h3>

            <div className={classes.inputs}>
                <div className={classes.input}>
                    <p>Логин</p>
                    <input type="text" placeholder="Логин" /> 
                </div>
                <div className={classes.input}>
                    <p>Имя</p>
                    <input type="text" placeholder="Имя" />
                </div>
                <div className={classes.input}>
                    <p>Дата рождения</p>
                    <input type="date" placeholder="Дата рождения" />
                </div>
                <div className={classes.input}>
                    <p>Город</p>
                    <select name="" id="">
                        {
                            city.map((city=>{
                                return <option value={city.id}>{city.name}</option>
                            }))
                        }
                    </select>
                </div>
                <div className={classes.input}>
                    <p>Деятельность</p>
                    <select name="" id="">
                        <option value="">Модель</option>
                    </select>
                </div>
                <div className={classes.input}>
                    <p>Пол</p>
                    <select name="" id="" >
                        <option value="">Женский</option>
                    </select>
                </div>
                <div className={classes.input}>
                    <p>Пароль</p>
                    <input type="text" placeholder="Пароль" />
                </div>
            </div>

        <button className={classes.center}>Зарегистрироваться</button>
    </div>
}
export default SignUpPage;