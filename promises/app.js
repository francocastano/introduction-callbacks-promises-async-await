import { postsDB, displayPosts } from '../common.js';

function addPost(post){
    return new Promise(resolve => {
        postsDB.push(post);
        resolve([post]);
    })
}

function main(){
    displayPosts(postsDB);

    const thirdPost = {title: `Post three`, body: `This is post three`};
    addPost(thirdPost).then(displayPosts);

    // let result = addPost(thirdPost);
    // result.then(displayPosts);
}

main();
