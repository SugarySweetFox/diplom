import { useEffect, useState } from "react";
import  classes from "./index.module.css";
import axios from 'axios';
import { Link } from "react-router-dom";
import delite from "../../img/delite.svg";
import { getUser } from "../../store/storage";
import Preloader from "../Preloader";

const AdminPanel=()=>{
    const [isLoading, setIsLoading] = useState(true);
    const [authUser, setAuthUser] = useState(getUser());

    const [allUsers, setAllUsers] = useState([])
    const [users, setUsers] = useState(allUsers)

    useEffect(() => {
        axios.get(`http://127.0.0.1:3001/api/users`).then((data) => {
            console.log(data.data)
            setUsers(data.data);
        })
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
    }, []);

    function delitee(id) {
        if (window.confirm('Вы уверены?'))
        axios.delete(`http://localhost:3001/api/users/${id}`).then((data) => {
            console.log(data);
            axios.get(`http://127.0.0.1:3001/api/users`).then((data) => {
            console.log(data.data)
            setUsers(data.data);
        })
        })
    }

    return <div className={classes.container}>
        {isLoading && <Preloader/>}
            <div className={classes.profile}>
                <div className={classes.profile_top}>
                    <div className={classes.div_first_btn}>
                        <p className={classes.center}>Пользователи</p>
                    </div>
                    <Link to="/admin_posts"><button className={classes.post_btn}>Посты</button></Link>
                    <Link to="/admin_works"><button className={classes.post_btn}>Все работы</button></Link>
                </div>
                <div className={classes.profile_div}>
                        <table>
                            <tr className={classes.brown}>
                                <th>Логин</th>
                                <th>Имя</th>
                                <th>День рождения</th>
                                <th>Город</th>
                                <th>Пол</th>
                                <th>Вид деятельности</th>
                                <th className={classes.last}></th>
                            </tr>
                            {
                                users.map((user)=>{
                                return <tr>
                                        <td>{user?.login}</td>
                                        <td>{user?.name}</td>
                                        <td>{user?.birthday}</td>
                                        <td>{user?.city.name}</td>
                                        <td>{user?.gender.name}</td>
                                        <td>{user?.activity.name}</td>
                                        <td className={classes.last}><img src={delite} alt="" onClick={() => {delitee(user?.id)}} className={classes.img_delite}/></td>
                                    </tr>
                                })
                            }
                        </table>
                        
                </div>
            </div> 
            
        </div>
}
export default AdminPanel;