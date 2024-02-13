
const setLocalStorage = (name, value) => {
    localStorage.setItem(name, value)
}

//id login token
const setUser = (user) => {
    console.log('user->', user);
    setLocalStorage('user', JSON.stringify(user));
    window.location.href = '/';
}

const removeUser = () => {
    window.location.href = '/';
    localStorage.clear();
    
}
const getUser=()=>{
    return JSON.parse(localStorage.getItem('user'));
}

const isAdmin = () => {
    if(getUser() == null) return false;
    if (getUser().role && getUser().role === 1) {
            return true
        }   
    // if(getUser() != null || getUser()?.role) {
        
    // } else ;
    // if (!getUser().role) return false
    // if (getUser().role && getUser().role === 1) {
    //     return true
    // } else {
    //     return false
    // }
}

export {setUser, getUser, removeUser, isAdmin}