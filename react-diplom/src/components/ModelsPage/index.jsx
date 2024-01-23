import  classes from "./index.module.css";
import Post from "../Post";
import { useState } from "react";

const ModelsPage=()=>{
    const [posts, setPosts] = useState([
        // {
        //     id: 2,
        //     about_me: "efde",
        //     kol_vo: 12,
        //     picture: "aabc50a9-0a39-44c9-accd-8c9223f09780.jpg",
        //     userId: null,
        //     typeId: null,
        //     "cityId": null,
        //     "activityId": null
        // },
        // {
        //     "id": 3,
        //     "about_me": "efd32325e",
        //     "kol_vo": 1223,
        //     "picture": "95446dfd-c032-42b6-8a88-ab4ff4c68a7d.jpg",
        //     "userId": null,
        //     "typeId": null,
        //     "cityId": null,
        //     "activityId": null
        // }
    ])

    return <>
    <div className={classes.line} />
        <div className={classes.container}>
            <Post />
            <Post />
            <Post />
        </div>
    </>
}
export default ModelsPage;