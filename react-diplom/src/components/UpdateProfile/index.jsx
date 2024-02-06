import axios from "axios";
import { useEffect, useState, useRef } from "react";
import  classes from "./index.module.css";



const UpdateProfile=({updateUser, setIsActive, user})=>{
    
    //Инпут фото
    let picInput = useRef(null);

    const [name, setName] = useState('');

    const [birthday, setBirthday] = useState('');
    
    const [picture, setPicture] = useState({});

    const [choosedCity, setChoosedCity] = useState(1);

    const [city, setCity] = useState([
        {
            name: "Moskoy",
        }
    ]);
    
    const [choosedActivity, setChoosedActivity] = useState(1);

    const [activity, setActivity] = useState([
        {
            name: "model",
        }
    ]);

    const [choosedGender, setChoosedGender] = useState(1);
    

    const [gender, setGender] = useState([
        {
            name: "man",
        }
    ]);

    const [isChoosedPhoto, setIsChoosedPhoto] = useState(false);
    
    useEffect(() => {
        if(user){
            setName(user.name);
            setBirthday(user.birthday);
            setPicture({name: user.photo});
            setChoosedCity(user.city_id);
            setChoosedGender(user.gender_id);
            setChoosedActivity(user.activities_id);
        }
    }, [user]);

    const handleUpload=()=>{
        console.log('picInout0->>>>>>>>',picInput.current.files[0])
        setPicture(picInput.current.files[0]);
    }

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
    }, []);


    const handleSendForm = (e) => {
        e.preventDefault();

        const formData = new FormData();
        if (isChoosedPhoto) formData.append('picture', picture)
        formData.append('name', name)
        formData.append('city_id', choosedCity)
        formData.append('activities_id', choosedActivity)
        formData.append('gender_id', choosedGender)
        formData.append('birthday', birthday)

        
        axios({
            method: "put",
            url: `http://127.0.0.1:3001/api/users/${user.id}`,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then(function (response) {
              //handle success
              console.log("euidfiwedrf", response);
              updateUser(user.id);
              setIsActive(false)
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
                    <p>Имя</p>
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
                </div>
                <div className={classes.gap}>
                <div className={classes.input}>
                    <p>Дата рождения</p>
                    <input type="date" placeholder="Дата рождения" value={birthday} onChange={(e)=>{setBirthday(e.target.value)}} />
                </div>
                <div className={classes.input}>
                    <p>Пол</p>
                    <select className={classes.select} value={choosedGender} onChange={(e)=>{setChoosedGender(e.target.value)}} name="" id="">
                        
                        {
                            gender.map((gender=>{
                                return <option className={classes.option} value={gender.id}>{gender.name}</option>
                            }))
                        }
                    </select>
                </div>
                <div className={classes.input}>
                    <p>Моя деятельность</p>
                    <select className={classes.select} value={choosedActivity} onChange={(e)=>{setChoosedActivity(e.target.value)}} name="" id="">
                        {
                            activity.map((activity=>{
                                return <option className={classes.option} value={activity.id}>{activity.name}</option>
                            }))
                        }
                    </select>
                </div>               
                </div>
            </div>

        <button className={classes.center} onClick={(e)=>handleSendForm(e)}>Сохранить</button>
    </div></>
}
export default UpdateProfile;