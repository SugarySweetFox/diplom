import  classes from "./index.module.css";

const SignInPage=()=>{
    return <div className={classes.block_brown}>
        <h3>Вход</h3>

            <div className={classes.inputs}>
                <div className={classes.input}>
                    <p>Логин</p>
                    <input type="text" placeholder="Логин" /> 
                </div>
                <div className={classes.input}>
                    <p>Пароль</p>
                    <input type="text" placeholder="Пароль" />
                </div>
            </div>

        <button className={classes.center}>Войти</button>
    </div>
}
export default SignInPage;