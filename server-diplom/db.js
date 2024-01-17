import express from 'express'
import Sequelize from 'sequelize'

export const sequelize = new Sequelize("diplom", "root", "", {
    dialect: 'mysql',
    host: 'localhost',
    define: {
        timestamps: false
    }
});
