// //when to use it 
// //we use this design pattern when we have an object with a lot of moving pieces a user that has name, address and a mail it provides a better method to enter required fields then the optional ones

// class Address{
//     constructor(zip, street){
//         this.zip = zip,
//         this.street = street
//     }
// }

// //name is the only required field mail, phone and address are optional 
// class User{
//     constructor(name, mail, phone, address){
//         this.name = name, 
//         this.mail = mail,
//         this.phone = phone,
//         this.address = address
//     }
// }

//if we want to add an address without adding mail or phone then we will have to write it as follows 
//and this is not clear to read and with bigger classes with more data it's easy to make mistakes
// const user = new User('bob', undefined, undefined, new Address('1', 'street'));
// console.log(user);


//to solve this we use the builder design pattern and we can create it in two different ways 
//the first method to create the builder design pattern 
// class Address{
//     constructor(zip, street){
//         this.zip = zip,
//         this.street = street
//     }
// }

// //name is the only required field mail, phone and address are optional 
// class User{
//     //we pass only the required field as a constructor parameter
//     constructor(name){
//         this.name = name
//         // this.mail = mail,
//         // this.phone = phone, 
//         // this.address = address
//     }
// }

// //we create a builder class 
// class UserBuilder{
//     //it takes only the required fields as constructor parameters in this case it's only name 
//     constructor(name){
//         this.user = new User(name)
//     }

//     //then we create a method to set each optional field
//     setMail(mail){
//         this.user.mail = mail;
//         return this;
//     }

//     setPhone(phone){
//         this.user.phone = phone;
//         return this;
//     }

//     setAddress(zip, street){
//         this.user.address = new Address(zip, street);
//         return this;
//     }

//     //then we create a build method to return a user instead of a userbuilder 
//     build(){
//         return this.user;
//     }
// }

// const user = new UserBuilder('bob').setMail('mail').setPhone('jjfjfj').setAddress('1', 'street').build();
// console.log(user);


//or we can use this method a more js oriented method in case of simple objects like this expamle 
class Address{
    constructor(zip, street){
        this.zip = zip;
        this.street = street;
    }
}

class User{
    //adding only the required fields and the optional fields can be passed as an array if not provided then set it to an empty array and we can add a default value to any field such as phone 
    constructor(name, {mail, phone = 'ffffffff', address} = {}){
        this.name = name;
        this.mail = mail;
        this.phone = phone; 
        this.address = address;
    }
}

const user = new User('bob', {mail: 'mail', address: new Address('1', 'street')});
console.log(user);