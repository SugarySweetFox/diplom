import axios from "axios";
import { useEffect, useState } from "react";
import  classes from "./index.module.css";

const FormPage=({setIsActive, userId})=>{
    
    const [name, setName] = useState();

    const [about, setAbout] = useState();

    const [choosedCity, setChoosedCity] = useState('1');

    const [city, setCity] = useState([
        {
            name: "Moskoy",
        }
    ]);

    const [choosedService, setChoosedService] = useState('1');

    const [service, setService] = useState([
        {
            name: "brovi",
        }
    ]);

    const [choosedType, setChoosedType] = useState('1');

    const [type, setType] = useState([
        {
            name: "Stydia",
        }
    ]);


    const [choosedGender, setChoosedGender] = useState('1');

    const [gender, setGender] = useState([
        {
            name: "man",
        }
    ]);

    const [choosedSearch, setChoosedSearch] = useState('1');

    const [search, setSearch] = useState([
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

    useEffect(() => {
        axios.get('http://127.0.0.1:3001/api/cities').then((data) => {
            console.log(data.data)
            setCity(data.data);
        })
        axios.get('http://127.0.0.1:3001/api/types').then((data) => {
            console.log(data.data)
            setType(data.data);
        })
        axios.get('http://127.0.0.1:3001/api/services').then((data) => {
            console.log(data.data)
            setService(data.data);
        })
        axios.get('http://127.0.0.1:3001/api/activities').then((data) => {
            console.log(data.data)
            setActivity(data.data);
        })
        axios.get('http://127.0.0.1:3001/api/genders').then((data) => {
            console.log(data.data)
            setGender(data.data);
        })
        axios.get('http://127.0.0.1:3001/api/searches').then((data) => {
            console.log(data.data)
            setSearch(data.data);
        })
    }, []);


    const handleSendForm = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:3001/api/posts', {
            
                name: name,
                city_id: choosedCity,
                picture: "choosedGender",
                activities_id: choosedActivity,
                type_id: choosedType,
                service_id: choosedService,
                search_id: choosedSearch,
                about_me: about,
                user_id: userId
            
        }).then(data=>{
            console.log(data);
            // setPopUpMessage(data.data.message)
            // setIsActive(true)
        }).catch(data=>{
            console.log('errr->', data);
            // setPopUpMessage(data.response.data.message)
            // setIsActive(true)

        });
    }


    return     <><div className={classes.block}>                
            <div className={classes.inputs}>
                <div className={classes.exit} onClick={(e)=>setIsActive(false)}>X</div>
                <div className={classes.gap}>
                <div className={classes.input}>
                    <p>Название поста</p>
                    <input type="text" placeholder="Название" value={name} onChange={(e)=>{setName(e.target.value)}} /> 
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
                    <p>Ваша деятельность</p>
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
                </div>
                <div className={classes.gap}>
                <div className={classes.input}>
                    <p>Кого ищите?</p>
                    <select className={classes.select} value={choosedSearch} onChange={(e)=>{setChoosedSearch(e.target.value)}} name="" id="">
                        {
                            search.map((search=>{
                                return <option className={classes.option} value={search.id}>{search.name}</option>
                            }))
                        }
                    </select>
                </div>
                <div className={classes.input}>
                    <p>Какие услуги предоставляете?</p>
                    <select className={classes.select} value={choosedService} onChange={(e)=>{setChoosedService(e.target.value)}} name="" id="">
                        {
                            service.map((service=>{
                                return <option className={classes.option} value={service.id}>{service.name}</option>
                            }))
                        }
                    </select>
                </div>
                <div className={classes.input}>
                    <p>Какой тип съемки?</p>
                    <select className={classes.select} value={choosedType} onChange={(e)=>{setChoosedType(e.target.value)}} name="" id="">
                        {
                            type.map((type=>{
                                return <option className={classes.option} value={type.id}>{type.name}</option>
                            }))
                        }
                    </select>
                </div>
                <div className={classes.input}>
                    <p>О себе:</p>
                    <input type="text" placeholder="Название" value={about} onChange={(e)=>{setAbout(e.target.value)}} /> 
                </div>                
                </div>
            </div>

        <button className={classes.center} onClick={(e)=>handleSendForm(e)}>Сохранить</button>
    </div></>
}
export default FormPage;