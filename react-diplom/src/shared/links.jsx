import MainPage from "../components/MainPage";
import ModelsPage from "../components/ModelsPage";
import SignInPage from "../components/SignInPage";
import SignUpPage from "../components/SignUpPage";
import ProfilePage from "../components/ProfilePage";
import PhotografPage from "../components/PhotografsPage";
import BeautyMastersPage from "../components/BeautyMastersPage";

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
    url: "/photograf",
    name: "Фотографы",
    component: PhotografPage
},
{
    url: "/beautyMasters",
    name: "Бьюти мастера",
    component: BeautyMastersPage
},
]




export default links;