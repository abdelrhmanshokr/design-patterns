//when to use it 
//when we have a key world = null is returned 
//if a site's user not signed in then we need to treat them as guests so their mail, username and password will be null so instead of checking for each one of them we could create a null object that has null value for username, password and mail 

//this is the code without using the null pattern 
// class User{
//     constructor(id, name){
//         this.id = id,
//         this.name = name
//     }

//     hasAccess(){
//         return this.name === 'bob';
//     }
// }

// const users = [
//     new User(1, 'bob'),
//     new User(2, 'ben')
// ]

// function getUser(id){
//     return users.find((user) => user.id === id);
// }

// function printUser(id){
//     const user = getUser(id);
    
//     let name = 'guest';
//     //we need to check if the user exist or not and if it has a name or not 
//     if(user != null && user.name != null) name = user.name;
//     console.log('hello' + name);

//     //we need to check if the user has access or not 
//     if(user != null && user.hasAccess != null && user.hasAccess()){
//         console.log('you have access');
//     }else{
//         console.log('get out');
//     }
// }


//this is the same code but with null pattern 
class User{
    constructor(id, name){
        this.id = id,
        this.name = name
    }
    
    hasAccess(){
        return this.name === 'bob';
    }
}

class NullUser{
    constructor(){
        this.id = -1,
        this.name = 'guest'
    }
    
    hasAccess(){
        return false;
    }
}

const users = [
    new User(1, 'bob'),
    new User(2, 'ben')
]

function getUser(id){
    const user = users.find((user) => user.id === id);
    if(user == null){
        return new NullUser();
    }else{
        return user;
    }
}

function printUser(id){
    const user = getUser(id);

    console.log('hello' + user.name);
    if(user.hasAccess()){
        console.log('you have access');
    }else{
        console.log('get out');
    }
    
}
