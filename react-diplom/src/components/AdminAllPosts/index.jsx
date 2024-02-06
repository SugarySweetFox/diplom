import { useEffect, useState } from "react";
import  classes from "./index.module.css";
import axios from 'axios';
import { Link } from "react-router-dom";
import delite from "../../img/delite.svg";
import PostModels from "../PostModel";
import PostPhotografs from "../PostPhotografs";
import PostBeautyMasters from "../PostBeautyMasters";
import Preloader from "../Preloader";

const AdminAllPosts=()=>{
    const [isLoading, setIsLoading] = useState(true);
    const [allPosts, setAllPosts] = useState([])
    const [posts, setPosts] = useState(allPosts)

    const [postsbeautymasters, setPostsbeautymasters] = useState([])

    const [postsphotografs, setPhotografs] = useState([])

    const [postsmodels, setModels] = useState([])



    useEffect(() => {
        axios.get('http://127.0.0.1:3001/api/posts').then((data) => {
            console.log(data.data)
            setAllPosts(data.data);
            setPosts(data.data);
        })
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
        // axios.get('http://127.0.0.1:3001/api/photografs').then((data) => {
        //     console.log(data.data)
        //     setPhotografs(data.data);
        // })
        // axios.get('http://127.0.0.1:3001/api/models').then((data) => {
        //     console.log(data.data)
        //     setModels(data.data);
        // })
    }, []);

   
    const [city, setCity] = useState([
        {
            name: "Moskoy",
        }
    ]);
    const [choosedCity, setChoosedCity] = useState('s');


    const [activities, setActivities] = useState([
        {
            name: "фотограф",
        }
    ]);
    const [choosedActivities, setChoosedActivities] = useState('s');

    
    useEffect(() => {
        axios.get('http://127.0.0.1:3001/api/activities').then((data) => {
            setActivities(data.data);
        })
        axios.get('http://127.0.0.1:3001/api/cities').then((data) => {
            setCity(data.data);
        })
    }, []);
    
    useEffect(() => {
        if (choosedCity !== 's' && choosedActivities !=='s'){
            let filteredByCity = allPosts.filter((post) => post.city_id == choosedCity);
            let filteredByActivities = filteredByCity.filter((post)=>post.activities_id == choosedActivities);
            console.log("filteredByActivites->", filteredByActivities);
            setPosts(filteredByActivities);
            console.log('оба');
            
        } else if(choosedCity > 0 && choosedActivities === 's'){
            let filteredByCity = allPosts.filter((post) => post.city_id == choosedCity);
            console.log("filteredByCity->", filteredByCity);
            setPosts(filteredByCity);
            console.log('Город');
        } else if(choosedCity === 's'  && choosedActivities > 0) {
            let filteredByActivities = allPosts.filter((post) => post.activities_id == choosedActivities);
            setPosts(filteredByActivities);
            console.log('Сервис');
        }
        else {
            setPosts(allPosts)
        }
    }, [choosedCity, choosedActivities]);




    return <div className={classes.container}>
        {isLoading && <Preloader/>}
            <div className={classes.profile}>
                <div className={classes.profile_top}>
                    <Link to="/admin"><button className={classes.post_btn}>Пользователи</button></Link>
                    <div className={classes.div_first_btn}>
                        <p className={classes.center}>Посты</p>
                    </div>
                    <Link to="/admin_works"><button className={classes.post_btn}>Все работы</button></Link>
                </div>
                <div className={classes.profile_div}>
                    
                <div className={classes.filter}> 
                    <select className={classes.select} onChange={(e)=>{setChoosedActivities(e.target.value)}} name="" id="">
                    <option className={classes.option} value={'s'}>Услуги</option>
                        {
                            activities.map((activities=>{
                                return <option className={classes.option} value={activities.id}>{activities.name}</option>
                            }))
                        }
                    </select>
                    <select className={classes.select} onChange={(e)=>{setChoosedCity(e.target.value);}} name="" id="">
                    <option className={classes.option} value={'s'}>Город</option>
                        {
                            city.map((city=>{
                                return <option className={classes.option} value={city.id}>{city.name}</option>
                            }))
                        }
                    </select>              
                </div>
                    
                    {
                        posts.map((post) => {
                            switch(post.activities_id){
                                case 3: return <PostBeautyMasters name={post.name}  picture={post.picture} user={post.user.name} city={post.city.name} search={post.search.name} service={post.service?.name}  about={post.about_me}/>
                                case 2: return <PostPhotografs name={post.name}  picture={post.picture} user={post.user.name} city={post.city.name} search={post.search.name} type={post.type?.name} about={post.about_me}/>
                                case 1: return <PostModels name={post.name}  picture={post.picture} user={post.user.name} city={post.city.name} search={post.search.name}  age={post.user.birthday} about={post.about_me}/>
                            }
                        })
                    }
                        
                    {/* {postsphotografs.map((post) => {
                        return <PostPhotografs name={post.name} picture={post.picture} user={post.user.name} post_id={post.id} city={post.city.name} search={post.search.name} type={post.type.name} about={post.about_me}/>
                    })}
                    {postsbeautymasters.map((post) => {
                        return <PostBeautyMasters name={post.name} picture={post.picture} user={post.user.name} post_id={post.id} city={post.city.name} search={post.search.name} service={post.service.name}  about={post.about_me}/>
                    })}
                    {postsmodels.map((post) => {
                        return <PostModels name={post.name} picture={post.picture} user={post.user.name} post_id={post.id} city={post.city.name} search={post.search.name}  age={post.user.birthday} about={post.about_me}/>
                    })} */}
                </div>    
            </div> 
            
        </div>
}
export default AdminAllPosts;