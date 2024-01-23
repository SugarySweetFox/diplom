import MainPage from "../components/MainPage";
import ModelsPage from "../components/ModelsPage";
import SignInPage from "../components/SignInPage";
import SignUpPage from "../components/SignUpPage";
import ProfilePage from "../components/ProfilePage";
import PhotografPage from "../components/PhotografsPage";

const links = [{
    url: "/",
    name: "Главная",
    component: MainPage
},
{
    url: "/models",
    name: "Модели",
    component: ModelsPage
},
{
    url: "/Photograf",
    name: "Фотографы",
    component: PhotografPage
},
{
    url: "/sign_in",
    name: "Вход",
    component: SignInPage
},
{
    url: "/sign_up",
    name: "Регистрация",
    component: SignUpPage
},
{
    url: "/profile",
    name: "Профиль",
    component: ProfilePage
}

]


export default links;