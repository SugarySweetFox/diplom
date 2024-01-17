import Sequelize from 'sequelize'
import {sequelize} from './db.js'


const Post = sequelize.define("post", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNulll: false
    },
    about_me: {
        type: Sequelize.STRING,
        allowNulll: false
    },
    kol_vo: {
        type: Sequelize.INTEGER,
        allowNulll: true
    },
    picture: {
        type: Sequelize.STRING,
        allowNulll: true
    }
});

const Users = sequelize.define("users", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNulll: false
    },
    name: {
        type: Sequelize.STRING,
        allowNulll: false
    },
    login: {
        type: Sequelize.STRING,
        allowNulll: false
    },
    password: {
        type: Sequelize.STRING,
        allowNulll: false
    },
    birthday: {
        type: Sequelize.DATE,
        allowNulll: false
    },
    photo: {
        type: Sequelize.STRING,
        allowNulll: false
    }
});
Users.hasMany(Post);

const Works = sequelize.define("works", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNulll: false
    },
    work: {
        type: Sequelize.STRING,
        allowNulll: false
    }
});

const Type = sequelize.define("type", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNulll: false
    },
    name: {
        type: Sequelize.STRING,
        allowNulll: false
    }
});
Type.hasMany(Post);

const Role = sequelize.define("role", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNulll: false
    },
    name: {
        type: Sequelize.STRING,
        allowNulll: false
    }
});
Role.hasMany(Users);

const Gender = sequelize.define("gender", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNulll: false
    },
    name: {
        type: Sequelize.STRING,
        allowNulll: false
    }
});
Gender.hasMany(Users);

const City = sequelize.define("city", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNulll: false
    },
    name: {
        type: Sequelize.STRING,
        allowNulll: false
    }
});
City.hasMany(Users);
City.hasMany(Post);

const Activities = sequelize.define("activities", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNulll: false
    },
    name: {
        type: Sequelize.STRING,
        allowNulll: false
    }
});
Activities.hasMany(Users);
Activities.hasMany(Post);

const Likes = sequelize.define("likes", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNulll: false
    }
});
Users.belongsToMany(Post, {through: Likes});
Post.belongsToMany(Users, {through: Likes});

const Portfolio = sequelize.define("portfolio", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNulll: false
    }
});
Users.belongsToMany(Works, {through: Portfolio});
Works.belongsToMany(Users, {through: Portfolio});

export default { Post, Users }