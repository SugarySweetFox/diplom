import  classes from "./index.module.css";
import PostModels from "../PostModel";
import { useEffect, useState } from "react";
import axios from "axios";



const ModelsPage=()=>{
    const [allPosts, setAllPosts] = useState([])
    const [posts, setPosts] = useState(allPosts)


    const [choosedCity, setChoosedCity] = useState('s');

    const [city, setCity] = useState([
        {
            name: "Moskoy",
        }
    ]);

    const [choosedSearch, setChoosedSearch] = useState('s');

    const [search, setSearch] = useState([
        {
            name: "Moskoy",
        }
    ]);

    const [choosedGender, setChoosedGender] = useState('s');

    const [gender, setGender] = useState([
        {
            name: "man",
        }
    ]);

    useEffect(() => {
        axios.get('http://127.0.0.1:3001/api/cities').then((data) => {
            console.log(data.data)
            setCity(data.data);
        })
        axios.get('http://127.0.0.1:3001/api/searches').then((data) => {
            console.log(data.data)
            setSearch(data.data);
        })
        axios.get('http://127.0.0.1:3001/api/models').then((data) => {
            console.log(data.data)
            setAllPosts(data.data);
            setPosts(data.data);
        })
        axios.get('http://127.0.0.1:3001/api/genders').then((data) => {
            console.log(data.data)
            setGender(data.data);
        })
    }, []);

    useEffect(() => {
        //Все три
        if (choosedCity !== 's' && choosedGender !=='s' && choosedSearch !=='s'){
            let filteredByCity = allPosts.filter((post) => post.city_id == choosedCity);
            let filteredByGender = filteredByCity.filter((post)=>post.user.gender_id == choosedGender);
            let filteredBySearch = filteredByGender.filter((post)=>post.search_id == choosedSearch);
            setPosts(filteredBySearch);
            console.log('трое');
         //Гендер и Поиск   
        } else if (choosedCity === 's' && choosedGender !=='s' && choosedSearch !=='s'){
            let filteredByGender = allPosts.filter((post) => post.user.gender_id == choosedGender);
            let filteredBySearch = filteredByGender.filter((post)=>post.search_id == choosedSearch);
            setPosts(filteredBySearch);
            console.log('оба');    
        //Город и поиск
        } else if (choosedCity !== 's' && choosedGender ==='s' && choosedSearch !=='s'){
            let filteredByCity = allPosts.filter((post) => post.city_id == choosedCity);
            let filteredBySearch = filteredByCity.filter((post)=>post.search_id == choosedSearch);
            setPosts(filteredBySearch);
            console.log('оба');    
        //Город и гендер
        } else if (choosedCity !== 's' && choosedGender !=='s' && choosedSearch ==='s'){
            let filteredByCity = allPosts.filter((post) => post.city_id == choosedCity);
            let filteredByGender = filteredByCity.filter((post)=>post.user.gender_id == choosedGender);
            setPosts(filteredByGender);
            console.log('оба'); 
        //Город
        } else if(choosedCity > 0 && choosedGender === 's' && choosedSearch === 's'){
            let filteredByCity = allPosts.filter((post) => post.city_id == choosedCity);
            setPosts(filteredByCity);
            console.log('Город');
        //Гендер
        } else if(choosedCity === 's' && choosedGender > 0 && choosedSearch === 's'){
            let filteredByGender = allPosts.filter((post) => post.user.gender_id == choosedGender);
            setPosts(filteredByGender);
            console.log('Гендер');
        //Поиск
        } else if(choosedCity === 's' && choosedGender === 's' && choosedSearch > 0){
            let filteredBySearch = allPosts.filter((post) => post.search_id == choosedSearch);
            setPosts(filteredBySearch);
            console.log('Поиск');
        } else {
            setPosts(allPosts)
        }
    }, [choosedCity, choosedGender, choosedSearch]);

    return <>
        <div className={classes.line}> 
            <div className={classes.filter}> 
                <select className={classes.select}  onChange={(e)=>{setChoosedCity(e.target.value)}} name="" id="">
                <option className={classes.option} value={'s'}>Город</option>
                    {
                        city.map((city=>{
                            return <option className={classes.option} value={city.id}>{city.name}</option>
                        }))
                    }
                </select>
                <select className={classes.select} onChange={(e)=>{setChoosedGender(e.target.value)}} name="" id="">
                <option className={classes.option} value={'s'}>Пол</option>
                    {
                        gender.map((gender=>{
                            return <option className={classes.option} value={gender.id}>{gender.name}</option>
                        }))
                    }
                </select>
                <select className={classes.select} onChange={(e)=>{setChoosedSearch(e.target.value)}} name="" id="">
                <option className={classes.option} value={'s'}>Кого ищу</option>
                    {
                        search.map((search=>{
                            return <option className={classes.option} value={search.id}>{search.name}</option>
                        }))
                    }
                </select>
            </div>
        </div>
        <div className={classes.container}>
            {posts.map((post) => {
                return <PostModels name={post.name} picture={post.picture} user={post.user.name} city={post.city.name} search={post.search.name} type={post.type.name} age={post.user.birthday} about={post.about_me}/>
            })}
            
            
        </div>
    </>
}
export default ModelsPage;