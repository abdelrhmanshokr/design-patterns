//when to use it
//we use this design pattern when we need to have a single object shared among all other system's objects, so it's data, state, and methods are shared as well 
//but this results in some issues such as 
//race condition, overwrite condition and other issues concenrned with two or more objects trying to modify the same variable at the same time 
//and to use it we need to use js modules system (importing some code from another files)


//to import some code from a file we do it as follows 
//import the default export of the file, {the normal exports} from the file location 
// import User, {printName, printAge} from './some_js_module.js';

// const user = new User('bob', 22);

// printName(user);

import logger from './some_js_module_2.js';


function logFromTheFirstFile(){
    logger.log('log from the first file');
    logger.printLogCount();
}


export default logFromTheFirstFile;