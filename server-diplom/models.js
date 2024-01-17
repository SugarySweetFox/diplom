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

const User = sequelize.define("user", {
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
User.hasMany(Post);

const Work = sequelize.define("work", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNulll: false
    },
    picture: {
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
Role.hasMany(User);

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
Gender.hasMany(User);

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
City.hasMany(User);
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
Activities.hasMany(User);
Activities.hasMany(Post);

const Like = sequelize.define("like", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNulll: false
    }
});
User.belongsToMany(Post, {through: Like});
Post.belongsToMany(User, {through: Like});

const Portfolio = sequelize.define("portfolio", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNulll: false
    }
});
User.belongsToMany(Work, {through: Portfolio});
Work.belongsToMany(User, {through: Portfolio});

export default { Post, User, Work, Role, Like, Gender, City, Activities, Portfolio, Type }