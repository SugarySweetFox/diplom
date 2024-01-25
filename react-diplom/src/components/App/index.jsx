import Header from "../Header";
import Footer from "../Footer";
import Routes from "../Routes";
import { useState } from "react";


const App = () => {
    // const [token, setToken] = useState(localStorage.getItem('token'));

    return <div>
        <Header />
        <Routes />
        <Footer />
       
    </div>
}

export default App;