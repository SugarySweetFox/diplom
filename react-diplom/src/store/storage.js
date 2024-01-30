
const setLocalStorage = (name, value) => {
    localStorage.setItem(name, value)
}

//id login token
const setUser = (user) => {
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

export {setUser, getUser, removeUser}