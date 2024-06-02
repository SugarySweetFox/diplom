import { useEffect, useRef, useState } from "react";
import  classes from "./index.module.css";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

import like from "../../img/imagee.png";
import { getUser } from "../../store/storage";
import Preloader from "../Preloader";

const PortfolioPage=()=>{

    let picInput = useRef(null);

    let { userIdParams } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [picture, setPicture] = useState();

    const [userId, setUserId] = useState(getUser().id);
    const [isAuthor, setIsAuthor] = useState(userId ? userId === +userIdParams : false);

    const [works, setWorks] = useState([
        {
            picture: like,
            favorite: true
        }
    ]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:3001/api/works/${userIdParams}`).then((data) => {
            console.log(data.data)
            setWorks(data.data);
        })
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
    }, []);

    useEffect(() => {
        handleSendForm()
        
    }, [picture]);

    const handleUpload=()=>{
        console.log('picInout0->>>>>>>>',picInput.current.files[0])
        setPicture(picInput.current.files[0]);
    }

    function delitee(id) {
        if (window.confirm('Вы уверены?'))
        axios.delete(`http://localhost:3001/api/works/${id}`).then((data) => {
            console.log(data);
            axios.get(`http://127.0.0.1:3001/api/works`).then((data) => {
            console.log(data.data)
            setWorks(data.data);
        })
        })
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
        {isLoading && <Preloader/>}
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
                        
                        <div className={classes.all_work}>
                        {isAuthor ?  <>  
                            <label htmlFor="file">
                                <div className={classes.add_work}><h1 className={classes.white}>+</h1></div>
                                <input className={classes.file} id="file" type="file" ref={picInput} onChange={handleUpload}/>
                             </label>
                        </> : <></>}
                            
                            {
                                works.map((work)=>{
                                    return <div className={classes.work}><img className={classes.work} src={"http://localhost:3001/" + work.picture} alt="" />{isAuthor ?  <> <div className={classes.exit} onClick={() => {delitee(work?.id)}}>X</div></> : <></>}</div>
                                })
                            }
                        </div>
                </div>
            </div> 
            
        </div>
}
export default PortfolioPage;