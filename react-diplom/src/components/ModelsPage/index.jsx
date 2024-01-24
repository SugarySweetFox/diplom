import  classes from "./index.module.css";
import PostModels from "../PostModel";
import { useEffect, useState } from "react";
import axios from "axios";



const ModelsPage=()=>{
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:3001/api/models').then((data) => {
            console.log(data.data)
            setPosts(data.data);
        })
    }, []);

    const [city, setCity] = useState([
        {
            name: "Moskoy",
        }
    ]);

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
    }, []);

    useEffect(() => {
        axios.get('http://127.0.0.1:3001/api/genders').then((data) => {
            console.log(data.data)
            setGender(data.data);
        })
    }, []);

    return <>
        <div className={classes.line}> 
            <div className={classes.filter}> 
                <select className={classes.select} name="" id="">
                    {
                        city.map((city=>{
                            return <option className={classes.option} value={city.id}>{city.name}</option>
                        }))
                    }
                </select>
                <select className={classes.select} name="" id="">
                    {
                        gender.map((gender=>{
                            return <option className={classes.option} value={gender.id}>{gender.name}</option>
                        }))
                    }
                </select>
            </div>
        </div>
        <div className={classes.container}>
            {posts.map((post) => {
                return <PostModels name={post.name} user={post.user.name} city={post.city.name} search={post.search.name} type={post.type.name} age={post.user.birthday} about={post.about_me}/>
            })}
            
            
        </div>
    </>
}
export default ModelsPage;