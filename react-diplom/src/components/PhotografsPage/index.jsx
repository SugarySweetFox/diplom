import  classes from "./index.module.css";
import PostPhotografs from "../PostPhotografs";
import { useEffect, useState } from "react";
import axios from "axios";



const PhotografsPage=()=>{
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:3001/api/photografs').then((data) => {
            console.log(data.data)
            setPosts(data.data);
        })
    }, []);

    const [city, setCity] = useState([
        {
            name: "Moskoy",
        }
    ]);

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
    }, []);

    useEffect(() => {
        axios.get('http://127.0.0.1:3001/api/types').then((data) => {
            console.log(data.data)
            setType(data.data);
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
                        type.map((type=>{
                            return <option className={classes.option} value={type.id}>{type.name}</option>
                        }))
                    }
                </select>
            </div>
    </div>
        <div className={classes.container}>
            {posts.map((post) => {
                return <PostPhotografs name={post.name} user={post.user.name} city={post.city.name} search={post.search.name} type={post.type.name} about={post.about_me}/>
            })}
            
            
        </div>
    </>
}
export default PhotografsPage;