import { Post, User, Work, Role, Like, Gender, City, Activities, Type } from "../models.js";

export default function createInfo(){
    City.create({name: "Санкт-Петербург"});
    City.create({name: "Москва"});
    Gender.create({name: "Мужчина"});
    Gender.create({name: "Женщина"});
    Activities.create({name: "Модель"});
    Activities.create({name: "Фотограф"});
    Role.create({name:"Админ"});
    Type.create({name: "Фотосессия"});
    Type.create({name: "Прогулка"});
}