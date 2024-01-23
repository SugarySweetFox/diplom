import { useEffect, useState } from "react";
import  classes from "./index.module.css";
import axios from 'axios';
import { Link } from "react-router-dom";

import like from "../../img/imagee.png";
const PortfolioPage=()=>{


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


    return <div className={classes.container}>
            <div className={classes.profile}>
                <div className={classes.profile_top}>
                <Link to="/profile"><button className={classes.post_btn}>Профиль</button></Link>
                    <div className={classes.div_first_btn}>
                        <p className={classes.center}>Портфолио</p>
                    </div>
                    <a href=""><button className={classes.post_btn}>Ваши объявления</button></a>
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
                            <button className={classes.add_work}><h1 className={classes.white}>+</h1></button>
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