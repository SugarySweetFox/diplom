import express from 'express'
import Sequelize from 'sequelize'
import {sequelize} from './db.js'
const app = express()

const Post = sequelize.define("posts", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNulll: false
    },
    author: {
        type: Sequelize.STRING,
        allowNulll: false
    },
    title: {
        type: Sequelize.STRING,
        allowNulll: false
    },
    content: {
        type: Sequelize.STRING,
        allowNulll: false
    },
    picture: {
        type: Sequelize.STRING,
        allowNulll: false
    }
});

export default { Post }