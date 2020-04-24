// //this design pattern is used to make it easier for us to modify our code late 

// //this is the code without the facede pattern
// function getUsers(){
//     return fetch('https://jsonplaceholder.typicode.com/users', {
//         method: 'GET',
//         headers: {'content-type': 'application/json'}
//     }).then(res => res.json());
// }

// function getUserPosts(){
//     return fetch('https://jsonplaceholder.typicode.com/posts?userId=${userId}', {
//         method: 'GET',
//         headers: {'content-type': 'application/json'}
//     }).then(res => res.json());
// }

// getUsers().then((user) => {
//     users.forEach(user => {
//         getUserPosts(user.id).then((posts) => {
//             console.log(user);
//             console.log(posts.length);
//         });
//     });
// });


//so both functions have some code in common so instead we can write this common code externally and call it when ever we need it 
function getUsers(){
    getFetch('https://jsonplaceholder.typicode.com/users');
}

function getUserPosts(){
    getFetch('https://jsonplaceholder.typicode.com/posts?userId=${userId}', {userId: userId});    
}

getUsers().then((users) => {
    users.forEach(user => {
        getUserPosts(user.id).then((posts) => {
            console.log(user);
            console.log(posts.length);
        });
    });
});

function getFetch(url, params = {}){
    const queryString = Object.entries(params).map(params => {
        return `${params[0]} = ${params[1]}`;
    }).join('&');
    return fetch(`${url}?${queryString}`, {
        method: 'GET',
        headers: {'content-type': 'application/json'}
    }).then(res => res.json());
}