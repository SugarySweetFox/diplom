import  classes from "./index.module.css";
import PostPhotografs from "../PostPhotografs";
import { useEffect, useState } from "react";
import axios from "axios";



const PhotografsPage=()=>{

    

    const [allPosts, setAllPosts] = useState([])
    const [posts, setPosts] = useState(allPosts)


    const [choosedCity, setChoosedCity] = useState('s');

    const [city, setCity] = useState([
        {
            name: "Moskoy",
        }
    ]);

    const [choosedType, setChoosedType] = useState('s');

    const [type, setType] = useState([
        {
            name: "прогулка",
        }
    ]);

    useEffect(() => {
        axios.get('http://127.0.0.1:3001/api/cities').then((data) => {
            console.log(data.data)
            setCity(data.data);
        })
        axios.get('http://127.0.0.1:3001/api/photografs').then((data) => {
            console.log(data.data)
            setAllPosts(data.data);
            setPosts(data.data);
        })
        axios.get('http://127.0.0.1:3001/api/types').then((data) => {
            console.log(data.data)
            setType(data.data);
        })
    }, []);

    useEffect(() => {
        if (choosedCity !== 's' && choosedType !=='s'){
            let filteredByCity = allPosts.filter((post) => post.type_id == choosedCity);
            let filteredByType = filteredByCity.filter((post)=>post.service_id == choosedType);
            setPosts(filteredByType);
            console.log('оба');
            
        } else if(choosedCity> 0 && choosedType === 's'){
            let filteredByCity = allPosts.filter((post) => post.city_id == choosedCity);
            setPosts(filteredByCity);
            console.log('Город');
        } else if(choosedCity === 's'  && choosedType > 0) {
            let filteredByType = allPosts.filter((post) => post.type_id == choosedType);
            setPosts(filteredByType);
            console.log('Тип');
        }
        else {
            setPosts(allPosts)
        }
    }, [choosedCity, choosedType]);


    return <>
    <div className={classes.line}> 
            <div className={classes.filter}> 
                <select className={classes.select} onChange={(e)=>{setChoosedCity(e.target.value)}} name="" id="">
                <option className={classes.option} value={'s'}>Город</option>
                    {
                        city.map((city=>{
                            return <option className={classes.option} value={city.id}>{city.name}</option>
                        }))
                    }
                </select>
                <select className={classes.select} onChange={(e)=>{setChoosedType(e.target.value)}} name="" id="">
                <option className={classes.option} value={'s'}>Съемка</option>
                    {
                        type.map((type=>{
                            return <option className={classes.option} value={type.id}>{type.name}</option>
                        }))
                    }
                </select>
            </div>
    </div>
        <div className={classes.container}>
            {posts.map((post) => {
                return <PostPhotografs name={post.name} picture={post.picture} user={post.user.name} city={post.city.name} search={post.search.name} type={post.type.name} about={post.about_me}/>
            })}
            
            
        </div>
    </>
}
export default PhotografsPage;