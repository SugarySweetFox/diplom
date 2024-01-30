import Header from "../Header";
import Footer from "../Footer";
import Routes from "../Routes";

import { useContext, useEffect, useState } from "react";
import { getUser } from "../../store/storage";



const App = () => {
    // const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState(getUser());

    useEffect(()=>{
        setUser(getUser());
    },[])

    return <div>
        <Header user={user} setUser={setUser}/>
        <Routes />
        <Footer />
       
    </div>
}

export default App;