import { useEffect, useState } from "react";
import  classes from "./index.module.css";
import axios from 'axios';
import { Link } from "react-router-dom";
import delite from "../../img/delite.svg";
import Preloader from "../Preloader";


const AdminAllWorks=()=>{

    const [isLoading, setIsLoading] = useState(true);
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
   


    const [picture, setPicture] = useState();



    const [works, setWorks] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:3001/api/works').then((data) => {
            console.log(data.data)
            setWorks(data.data);
        })
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
    }, []);

    // useEffect(() => {
    //     handleSendForm()
        
    // }, [picture]);

    // const handleSendForm = () => {
      
    //     const formData = new FormData();
    //     formData.append('picture', picture)

        
    //     axios({
    //         method: "post",
    //         url: "http://127.0.0.1:3001/api/works",
    //         data: formData,
    //         headers: { "Content-Type": "multipart/form-data" },
    //       })
    //         .then(function (response) {
    //           //handle success
    //           axios.get('http://127.0.0.1:3001/api/works').then((data) => {
    //                 console.log(data.data)
    //                 setWorks(data.data);
    //             })  
    //           console.log(response);
    //         })
    //         .catch(function (response) {
    //           //handle error
    //           console.log(response);
    //         });

    // }



    return <div className={classes.container}>
        {isLoading && <Preloader/>}
            <div className={classes.profile}>
                <div className={classes.profile_top}>
                    <Link to="/admin"><button className={classes.post_btn}>Пользователи</button></Link>
                    <Link to="/admin_posts"><button className={classes.post_btn}>Посты</button></Link>
                    <div className={classes.div_first_btn}>
                        <p className={classes.center}>Все работы</p>
                    </div>
                    
                </div>
                <div className={classes.profile_div}>
                    
                        <div className={classes.all_work}>
                            
                            {
                             !!works.length && works.map((work)=>{
                                    return <div className={classes.work}><img className={classes.work} src={"http://localhost:3001/" + work.picture} alt="" /><div className={classes.exit} onClick={() => {delitee(work?.id)}}>X</div></div>
                                })
                            }
                        </div>
                
                </div>    
            </div> 
            
        </div>
}
export default AdminAllWorks;
