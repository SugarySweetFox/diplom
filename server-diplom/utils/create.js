import { Post, User, Work, Role, Like, Gender, City, Activities, Type, Search } from "../models.js";

export default function createInfo(){
    City.create({name: "Санкт-Петербург"});
    City.create({name: "Москва"});
    Gender.create({name: "Мужчина"});
    Gender.create({name: "Женщина"});
    Activities.create({name: "Модель"});
    Activities.create({name: "Фотограф"});
    Search.create({name: "Модель"});
    Search.create({name: "Фотограф"});
    Role.create({name:"Админ"});
    Type.create({name: "Фотосессия"});
    Type.create({name: "Прогулка"});
    User.create({name: 'Арбуз', login: "admin", password: 1,	photo: "asd", 	city_id: 1,	role_id: 1,	gender_id: 1,	activities_id: 1	});
        //	id	name	login	password	birthday	photo	city_id	role_id	gender_id	activities_id	
    Post.create({name: 'Пост1',	about_me:"Пару слов", 	picture:"as",	user_id: 1,	type_id: 1,	city_id: 1,	activities_id:1,	search_id: 2});
    Post.create({name: 'Пост2',	about_me:"Пару словd", 	picture:"as",	user_id: 1,	type_id: 1,	city_id: 1,	activities_id:2,	search_id: 1});
}