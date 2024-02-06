import axios from "axios";

function checkLike(likes, user_id){
    let isLiked = false;

    if(typeof likes === 'object'){

        likes.forEach(like => {
            if (like === user_id) isLiked = true;
        })
    }
    return isLiked;
}
function like(id, user_id) {
    axios.post('http://localhost:3001/api/likes', {
        post_id: id,
        user_id: user_id
    }).then((data) => {
        console.log(data);
    })
}
function dislike(id, user_id) {
    axios.post('http://localhost:3001/api/dislikes', {
            post_id: id,
            user_id: user_id
    }).then((data) => {
        console.log(data);
    })
}

export {checkLike, like, dislike};