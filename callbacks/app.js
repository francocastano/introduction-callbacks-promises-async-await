import { postsDB, displayPosts } from '../common.js';

function addPost(post, callback){
    postsDB.push(post);
    callback([post]);
}



function main(){
    displayPosts(postsDB);
    
    const thirdPost = {title: `Post three`, body: `This is post three`};
    addPost(thirdPost, displayPosts);
}




main();
