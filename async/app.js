import { postsDB, displayPosts } from '../common.js';

async function addPost(post){
    return new Promise((resolve) => {
        postsDB.push(post);
        resolve([post]);  // This is the new return
    })
}

async function main(){
    displayPosts(postsDB);
    
    const thirdPost = {title: `Post three`, body: `This is post three`};
    let result = await addPost(thirdPost);
    displayPosts(result);
}



main();
