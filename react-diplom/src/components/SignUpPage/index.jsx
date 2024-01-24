import axios from "axios";
import { useEffect, useState } from "react";
import  classes from "./index.module.css";

const SignUpPage=()=>{

    const [city, setCity] = useState([
        {
            name: "Moskoy",
        }
    ]);

    const [activity, setActivity] = useState([
        {
            name: "model",
        }
    ]);

    const [gender, setGender] = useState([
        {
            name: "woman",
        }
    ]);

    useEffect(() => {
        axios.get('http://127.0.0.1:3001/api/cities').then((data) => {
            console.log(data.data)
            setCity(data.data);
        })
    }, []);

    useEffect(() => {
        axios.get('http://127.0.0.1:3001/api/activities').then((data) => {
            console.log(data.data)
            setActivity(data.data);
        })
    }, []);

    useEffect(() => {
        axios.get('http://127.0.0.1:3001/api/genders').then((data) => {
            console.log(data.data)
            setGender(data.data);
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
                    <select className={classes.select} name="" id="">
                        {
                            city.map((city=>{
                                return <option className={classes.option} value={city.id}>{city.name}</option>
                            }))
                        }
                    </select>
                </div>
                <div className={classes.input}>
                    <p>Деятельность</p>
                    <select className={classes.select} name="" id="">
                        {
                            activity.map((activity=>{
                                return <option className={classes.option} value={activity.id}>{activity.name}</option>
                            }))
                        }
                    </select>
                </div>
                <div className={classes.input}>
                    <p>Пол</p>
                    <select className={classes.select} name="" id="" >
                        {
                            gender.map((gender=>{
                                return <option className={classes.option} value={gender.id}>{gender.name}</option>
                            }))
                        }
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