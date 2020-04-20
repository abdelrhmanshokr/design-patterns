// //wihtout the singleton pattern
// class FancyLogger{
//     constructor(){
//         this.logs = [];
//     }

//     log(message){
//         this.logs.push(message);
//         console.log(`fancy ${message}`);
//     }

//     printLogCount(){
//         console.log(`${this.logs.length} logs`);
//     }
// }

// //to export this class as a default
// export default FancyLogger;

//with the singleton pattern
class FancyLogger{
    constructor(){
        //check if there is any instances created 
        if(FancyLogger.instance == null){
            this.log = [];
            FancyLogger.instance = this;
        }
        //if there is an instance then return it to the user 
        return FancyLogger.instance;
    }
    
    log(message){
        this.logs.push(message);
        console.log(`fancy ${message}`);
    }
    
    printLogCount(){
        console.log(`${this.logs.length} logs`);
    }
}

//create the first and only instance of it 
const logger = new FancyLogger();
//to prevent any one from messing with it we use 
//Object.freeze(logger);
//finally we export the newly created instance instead of the class itself
export default logger;