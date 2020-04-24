//a module file to import when using the singleton design psttern 
//there is two types of export the default and the normal 

//this is the default export by adding export default inline before the code we want to export 
class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

//this is the normal export by adding export inline before the code we want to export 
function printName(user){
    console.log(`this user name is ${user.name}`);
}

function printAge(user){
    console.log(`this user age is ${user.age}`);
}

//or we can export it in the end of the file as follows 
export default User;
export {printName, printAge};