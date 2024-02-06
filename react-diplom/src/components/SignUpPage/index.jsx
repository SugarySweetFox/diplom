import axios from "axios";
import { useEffect, useState } from "react";
import PopUp from "../PopUp";
import Preloader from "../Preloader";
import  classes from "./index.module.css";

const SignUpPage=()=>{
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState();

    const [login, setLogin] = useState();

    const [password, setPassword] = useState();

    const [birthday, setBirthday] = useState();


    const [choosedCity, setChoosedCity] = useState('1');

    const [city, setCity] = useState([
        {
            name: "Moskoy",
        }
    ]);


    const [choosedGender, setChoosedGender] = useState('1');

    const [gender, setGender] = useState([
        {
            name: "man",
        }
    ]);
    
    const [choosedActivity, setChoosedActivity] = useState('1');

    const [activity, setActivity] = useState([
        {
            name: "model",
        }
    ]);

    const [isActive, setIsActive] = useState(false);

    const [popUpMessage, setPopUpMessage] = useState("");

    useEffect(() => {
        axios.get('http://127.0.0.1:3001/api/cities').then((data) => {
            console.log(data.data)
            setCity(data.data);
        })
        axios.get('http://127.0.0.1:3001/api/activities').then((data) => {
            console.log(data.data)
            setActivity(data.data);
        })
        axios.get('http://127.0.0.1:3001/api/genders').then((data) => {
            console.log(data.data)
            setGender(data.data);
        })
        setIsLoading(false)
    }, []);


    const handleSendForm = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:3001/auth/registration', {
            
                name: name,
                login: login,
                password: password,
                city_id: choosedCity,
                birthday: birthday,
                gender_id: choosedGender,
                activities_id: choosedActivity
            
        }).then(data=>{
            console.log(data);
            setPopUpMessage(data.data.message)
            setIsActive(true)
        }).catch(data=>{
            console.log(data);
            setPopUpMessage(data.response.data.message)
            setTimeout(() => {
                setIsLoading(false)
            }, 1000);

        });
    }

    return     <>{isActive&&<PopUp message={popUpMessage} setIsActive={setIsActive}/>}<div className={classes.block_brown}>
        {isLoading && <Preloader/>}
        <h3>Вход</h3>
                
            <div className={classes.inputs}>
                <div className={classes.input}>
                    <p>Логин</p>
                    <input type="text" placeholder="Логин" value={login} onChange={(e)=>{setLogin(e.target.value)}} /> 
                </div>
                <div className={classes.input}>
                    <p>Имя</p>
                    <input type="text" placeholder="Имя" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div className={classes.input}>
                    <p>Дата рождения</p>
                    <input type="date" placeholder="Дата рождения" value={birthday} onChange={(e)=>{setBirthday(e.target.value)}} />
                </div>
                <div className={classes.input}>
                    <p>Город</p>
                    <select className={classes.select} value={choosedCity} onChange={(e)=>{setChoosedCity(e.target.value)}} name="" id="">
                        {
                            city.map((city=>{
                                return <option className={classes.option} value={city.id}>{city.name}</option>
                            }))
                        }
                    </select>
                </div>
                <div className={classes.input}>
                    <p>Деятельность</p>
                    <select className={classes.select} value={choosedActivity} onChange={(e)=>{setChoosedActivity(e.target.value)}} name="" id="">
                        {
                            activity.map((activity=>{
                                return <option className={classes.option} value={activity.id}>{activity.name}</option>
                            }))
                        }
                    </select>
                </div>
                <div className={classes.input}>
                    <p>Пол</p>
                    <select className={classes.select} value={choosedGender} onChange={(e)=>{setChoosedGender(e.target.value)}} name="" id="" >
                        {
                            gender.map((gender=>{
                                return <option className={classes.option} value={gender.id}>{gender.name}</option>
                            }))
                        }
                    </select>
                </div>
                <div className={classes.input}>
                    <p>Пароль</p>
                    <input type="text" placeholder="Пароль" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
            </div>

        <button className={classes.center} onClick={(e)=>handleSendForm(e)}>Зарегистрироваться</button>
    </div></>
}
export default SignUpPage;