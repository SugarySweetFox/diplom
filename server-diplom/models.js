import Sequelize from 'sequelize'
import {sequelize} from './db.js'




const Chat = sequelize.define("chat", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }
});

const Message = sequelize.define("message", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    chat_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
    time: {
        type: Sequelize.DATE,
        allowNull: false
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }

});

const ChatMembers = sequelize.define("chatMembers", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }
});

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
    // portfolio_id: {
    //     type: Sequelize.INTEGER,
    //     allowNull: true
    // },
    favorite: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
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

// const Portfolio = sequelize.define("portfolio", {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//         allowNulll: false
//     }
// });
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
        type: Sequelize.STRING,
        allowNull: true
    },
    photo: {
        type: Sequelize.STRING,
        allowNull: true
    },
    city_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    role_id: {
        type: Sequelize.INTEGER,
        allowNull: true
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

const Search = sequelize.define("search", {
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

const Service = sequelize.define("service", {
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
    },
    post_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: true
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
    about_me: {
        type: Sequelize.STRING,
        allowNulll: false
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
    },
    search_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    service_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    count: {
        type: Sequelize.STRING,
        allowNull: true
    }
})



// Posts

Post.belongsTo(User, {
    foreignKey: 'user_id',
    targetKey: 'id',
    onDelete: 'cascade'
});
Post.belongsTo(City, {
    foreignKey: 'city_id',
    targetKey: 'id',
    onDelete: 'cascade'
});
Post.belongsTo(Activities, {
    foreignKey: 'activities_id',
    targetKey: 'id',
    onDelete: 'cascade'
});
Post.belongsTo(Type, {
    foreignKey: 'type_id',
    targetKey: 'id',
    onDelete: 'cascade'
});
Post.belongsTo(Search, {
    foreignKey: 'search_id',
    targetKey: 'id',
    onDelete: 'cascade'
});
Post.belongsTo(Service, {
    foreignKey: 'service_id',
    targetKey: 'id',
    onDelete: 'cascade'
});

//User


User.belongsTo(Role, {
    foreignKey: 'role_id',
    targetKey: 'id',
    onDelete: 'cascade'
});
User.belongsTo(City, {
    foreignKey: 'city_id',
    targetKey: 'id',
    onDelete: 'cascade'
});
User.belongsTo(Activities, {
    foreignKey: 'activities_id',
    targetKey: 'id',
    onDelete: 'cascade'
});
User.belongsTo(Gender, {
    foreignKey: 'gender_id',
    targetKey: 'id',
    onDelete: 'cascade'
});

// Likes

Like.belongsTo(User, {
    foreignKey: 'user_id',
    targetKey: 'id',
    onDelete: 'cascade'
});
Like.belongsTo(Post, {
    foreignKey: 'post_id',
    targetKey: 'id',
    onDelete: 'cascade'
});

// Message

Message.belongsTo(User, {
    foreignKey: 'user_id',
    targetKey: 'id',
    onDelete: 'cascade'
});
Message.belongsTo(Post, {
    foreignKey: 'chat_id',
    targetKey: 'id',
    onDelete: 'cascade'
});



// Work

Work.belongsTo(User, {
    foreignKey: 'user_id',
    targetKey: 'id',
    onDelete: 'cascade'
});

// Chat and Users

User.belongsToMany(Chat, {through: ChatMembers});
Chat.belongsToMany(User, {through: ChatMembers});
ChatMembers.belongsTo(User);
ChatMembers.belongsTo(Chat);



export  { Post, User, Work, Role, Like, Gender, City, Activities, Type, Search, Service, Chat, ChatMembers, Message }