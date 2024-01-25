import  classes from "./index.module.css";
import PostBeautyMasters from "../PostBeautyMasters";
import { useEffect, useState } from "react";
import axios from "axios";



const BeautyMastersPage=()=>{
    const [allPosts, setAllPosts] = useState([])
    const [posts, setPosts] = useState(allPosts)

    const [city, setCity] = useState([
        {
            name: "Moskoy",
        }
    ]);

    const [choosedCity, setChoosedCity] = useState('s');

    const [service, setService] = useState([
        {
            name: "мастер маникюра",
        }
    ]);

    const [choosedService, setChoosedService] = useState('s');


    useEffect(() => {
        axios.get('http://127.0.0.1:3001/api/services').then((data) => {
            console.log(data.data)
            setService(data.data);
        })
        axios.get('http://127.0.0.1:3001/api/beautymasters').then((data) => {
            console.log(data.data)
            setAllPosts(data.data);
            setPosts(data.data);
        })
        axios.get('http://127.0.0.1:3001/api/cities').then((data) => {
            console.log(data.data)
            setCity(data.data);
        })
    }, []);
    
    useEffect(() => {
        if (choosedCity !== 's' && choosedService !=='s'){
            let filteredByCity = allPosts.filter((post) => post.city_id == choosedCity);
            let filteredByService = filteredByCity.filter((post)=>post.service_id == choosedService);
            setPosts(filteredByService);
            console.log('оба');
            
        } else if(choosedCity> 0 && choosedService === 's'){
            let filteredByCity = allPosts.filter((post) => post.city_id == choosedCity);
            setPosts(filteredByCity);
            console.log('Город');
        } else if(choosedCity === 's'  && choosedService > 0) {
            let filteredByService = allPosts.filter((post) => post.service_id == choosedService);
            setPosts(filteredByService);
            console.log('Сервис');
        }
        else {
            setPosts(allPosts)
        }
    }, [choosedCity, choosedService]);
    

    return <>
    <div className={classes.line}> 
            <div className={classes.filter}> 
                <select className={classes.select} onChange={(e)=>{setChoosedCity(e.target.value);}} name="" id="">
                <option className={classes.option} value={'s'}>Город</option>
                    {
                        city.map((city=>{
                            return <option className={classes.option} value={city.id}>{city.name}</option>
                        }))
                    }
                </select>
                <select className={classes.select} onChange={(e)=>{setChoosedService(e.target.value)}} name="" id="">
                <option className={classes.option} value={'s'}>Услуги</option>
                    {
                        service.map((service=>{
                            return <option className={classes.option} value={service.id}>{service.name}</option>
                        }))
                    }
                </select>
            </div>
    </div>
        <div className={classes.container}>
            {posts.map((post) => {
                return <PostBeautyMasters name={post.name} user={post.user.name} city={post.city.name} search={post.search.name} service={post.service.name}  about={post.about_me}/>
            })}
            
            
        </div>
    </>
}
export default BeautyMastersPage;