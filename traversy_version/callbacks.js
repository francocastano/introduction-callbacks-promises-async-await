const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'}
]

function displayPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    },1000)
}

function addPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000)
}


addPost({title: `Post Three`, body: `This is post three`}, displayPosts)