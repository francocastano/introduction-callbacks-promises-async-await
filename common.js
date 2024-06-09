export const postsDB = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'}
]

export function displayPosts(posts){
    let output = document.body.innerHTML || "";
    for(let post of posts){
        output += `<li>${post.title}</li>`;
    }
    document.body.innerHTML = output;
}
