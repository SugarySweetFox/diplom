import axios from "axios";
import { useEffect, useState, useRef } from "react";
import  classes from "./index.module.css";
import bsCustomFileInput from 'bs-custom-file-input';


const FormPage=({setIsActive, userId,  refreshPosts})=>{
    
    //Инпут фото
    let picInput = useRef(null);

    const [name, setName] = useState("");

    const [about, setAbout] = useState("");

    const [picture, setPicture] = useState();

    const [choosedCity, setChoosedCity] = useState(1);

    const [city, setCity] = useState([
        {
            name: "Moskoy",
        }
    ]);

    const [choosedService, setChoosedService] = useState(0);

    const [service, setService] = useState([
        {
            name: "brovi",
        }
    ]);

    const [choosedType, setChoosedType] = useState(0);

    const [type, setType] = useState([
        {
            name: "Stydia",
        }
    ]);


    const [choosedSearch, setChoosedSearch] = useState(1);

    const [search, setSearch] = useState([
        {
            name: "man",
        }
    ]);
    
    const [choosedActivity, setChoosedActivity] = useState(1);

    const [activity, setActivity] = useState([
        {
            name: "model",
        }
    ]);

    const handleUpload=()=>{
        console.log('picInout0->>>>>>>>',picInput.current.files[0])
        setPicture(picInput.current.files[0]);
    }

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
        axios.get('http://127.0.0.1:3001/api/searches').then((data) => {
            console.log(data.data)
            setSearch(data.data);
        })
    }, []);


    const handleSendForm = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('picture', picture)
        formData.append('name', name)
        formData.append('city_id', choosedCity)
        formData.append('activities_id', choosedActivity)
        
        if (choosedType){
            formData.append('type_id', choosedType)
            
        }
        if (choosedService){
            formData.append('service_id', choosedService)
        }

        formData.append('search_id', choosedSearch)
        formData.append('about_me', about)
        formData.append('user_id', userId )

        
        axios({
            method: "post",
            url: "http://127.0.0.1:3001/api/posts",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then(function (response) {
                refreshPosts();
                setIsActive(false)
              //handle success
              console.log(response);
            })
            .catch(function (response) {
              //handle error
              console.log(response);
            });

    }

    

    // componentDidMount() {
    //     bsCustomFileInput.init()
    // }

    return     <><div className={classes.block}>                
            <div className={classes.inputs}>
                <div className={classes.exit} onClick={(e)=>setIsActive(false)}>X</div>
                <div className={classes.gap}>
                <div className={classes.input}>
                    <label htmlFor="file"><p>Фото</p>
                        {!picture ?  <div className={classes.file_active}>Выберите файл..</div> : <div className={classes.file_active}>{picture.name}</div>} 
                    <input className={classes.file} id="file" type="file" ref={picInput} onChange={handleUpload}/>
                    </label>
                </div>
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
                        <option className={classes.option} value={0}>Нет</option>
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
                        <option className={classes.option} value={0}>Нет</option>
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