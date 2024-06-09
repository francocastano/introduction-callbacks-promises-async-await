import { postsDB, displayPosts } from '../common.js';

function addPost(post){
    postsDB.push(post);
    return [post];
}



function main(){
    displayPosts(postsDB);
    
    const thirdPost = {title: `Post three`, body: `This is post three`};
    let result = addPost(thirdPost);
    displayPosts(result);
}



main();
