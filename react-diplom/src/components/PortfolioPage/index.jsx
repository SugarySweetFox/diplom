import { useEffect, useRef, useState } from "react";
import  classes from "./index.module.css";
import axios from 'axios';
import { Link } from "react-router-dom";

import like from "../../img/imagee.png";
import { getUser } from "../../store/storage";
const PortfolioPage=()=>{

    let picInput = useRef(null);

    const [picture, setPicture] = useState();

    const [userId, setUserId] = useState(getUser().id);

    const [works, setWorks] = useState([
        {
            picture: like,
            favorite: true
        },
        {
            picture: like,
            favorite: false
        },
        {
            picture: like,
            favorite: false
        },
        {
            picture: like,
            favorite: true
        }
    ]);

    useEffect(() => {
        axios.get('http://127.0.0.1:3001/api/works').then((data) => {
            console.log(data.data)
            setWorks(data.data);
        })
    }, []);

    useEffect(() => {
        handleSendForm()
        
    }, [picture]);

    const handleUpload=()=>{
        console.log('picInout0->>>>>>>>',picInput.current.files[0])
        setPicture(picInput.current.files[0]);
    }

    const handleSendForm = () => {
      
        const formData = new FormData();
        formData.append('picture', picture)
        formData.append('user_id', userId )

        
        axios({
            method: "post",
            url: "http://127.0.0.1:3001/api/works",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then(function (response) {
              //handle success
              axios.get('http://127.0.0.1:3001/api/works').then((data) => {
                    console.log(data.data)
                    setWorks(data.data);
                })  
              console.log(response);
            })
            .catch(function (response) {
              //handle error
              console.log(response);
            });

    }

    return <div className={classes.container}>
            <div className={classes.profile}>
                <div className={classes.profile_top}>
                    <Link to="/profile"><button className={classes.post_btn}>Профиль</button></Link>
                    <div className={classes.div_first_btn}>
                        <p className={classes.center}>Портфолио</p>
                    </div>
                    <Link to="/myposts"><button className={classes.post_btn}>Мои объявления</button></Link>
                    <Link to="/like"><button className={classes.post_btn}>Избранное</button></Link>
                </div>
                <div className={classes.profile_div}>
                        <h3>Лучшие работы</h3>
                        <div className={classes.best_work}>
                            {
                                works.map((work)=>{
                                    if (work.favorite)
                                    return <div className={classes.photo}>
                                    <div className={classes.div_okr}></div>
                                    <img className={classes.img} src={"http://localhost:3001/" + work.picture} alt="" />
                                    <div className={classes.div_border}></div>
                                    </div>
                                })
                            }                           
                        </div>
                        <div className={classes.all_work}>
                            <label htmlFor="file">
                                <div className={classes.add_work}><h1 className={classes.white}>+</h1></div>
                                <input className={classes.file} id="file" type="file" ref={picInput} onChange={handleUpload}/>
                             </label>
                            
                            {
                                works.map((work)=>{
                                    return <div className={classes.work}><img className={classes.work} src={"http://localhost:3001/" + work.picture} alt="" /></div>
                                })
                            }
                        </div>
                </div>
            </div> 
            
        </div>
}
export default PortfolioPage;