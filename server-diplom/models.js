import Sequelize from 'sequelize'
import {sequelize} from './db.js'




const Work = sequelize.define("work", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    picture: {
        type: Sequelize.STRING,
        allowNull: false
    },
    portfolio_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
});



// const PortfolioUser = sequelize.define("portfolioUser", {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//         allowNulll: false
//     }
// });

const Portfolio = sequelize.define("portfolio", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNulll: false
    }
});
// Portfolio.hasMany(Work);
// Portfolio.hasMany(PortfolioUser);

const User = sequelize.define("user", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    login: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    birthday: {
        type: Sequelize.DATE,
        allowNull: false
    },
    photo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    role_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    gender_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    activities_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});
// User.hasMany(Post);
// User.hasMany(PortfolioUser);

const Type = sequelize.define("type", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true, 
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
// Type.hasMany(Post);

const Role = sequelize.define("role", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
// Role.hasMany(User);

const Gender = sequelize.define("gender", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
// Gender.hasMany(User);

const City = sequelize.define("city", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
// City.hasMany(User);
// City.hasMany(Post);

const Activities = sequelize.define("activities", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
// Activities.hasMany(User);
// Activities.hasMany(Post);

const Like = sequelize.define("like", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }
});
// User.belongsToMany(Post, {through: Like});
// Post.belongsToMany(User, {through: Like});





const Post = sequelize.define("post", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    desc: {
        type: Sequelize.STRING,
        allowNull: false
    },
    about_me: {
        type: Sequelize.STRING,
        allowNulll: false
    },
    count: {
        type: Sequelize.INTEGER,
        allowNulll: true
    },
    picture: {
        type: Sequelize.STRING,
        allowNulll: true
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    type_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    city_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    activities_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})


Post.belongsTo(User, {
    foreignKey: 'user_id',
    targetKey: 'id'
});


//User


User.belongsTo(Role, {
    foreignKey: 'role_id',
    targetKey: 'id'
});
User.belongsTo(City, {
    foreignKey: 'city_id',
    targetKey: 'id'
});
User.belongsTo(Activities, {
    foreignKey: 'activities_id',
    targetKey: 'id'
});
User.belongsTo(Gender, {
    foreignKey: 'gender_id',
    targetKey: 'id'
});



// Posts

Post.belongsTo(User, {
    foreignKey: 'user_id',
    targetKey: 'id'
});
Post.belongsTo(City, {
    foreignKey: 'city_id',
    targetKey: 'id'
});
Post.belongsTo(Activities, {
    foreignKey: 'activities_id',
    targetKey: 'id'
});
Post.belongsTo(Type, {
    foreignKey: 'type_id',
    targetKey: 'id'
});





export  { Post, User, Work, Role, Like, Gender, City, Activities, Type, Portfolio }