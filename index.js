function getUserByUsername(username) {
    setTimeout(() => {
        ////query database ...
        let userId = 1;
        console.log('find userId search is  :' + userId);
        return userId;
    }, 3000);
}

function getPostByUserId(userId) {

    setTimeout(function () {
        //query database ...
        let postId = 2;
        console.log('find postId search is  :' + postId);
        return postId;
    }, 2000);
}

function getPostCommentByPostId(postId) {
    setTimeout(function () {
        //query database ...
        let commentId = 3;
        console.log('find commentId search is  :' + commentId);
        return commentId;
    }, 1000);
}

var userId = getUserByUsername('phut');
console.log(userId);
var postId = getPostByUserId(userId);
var commentId = getPostCommentByPostId(postId);
