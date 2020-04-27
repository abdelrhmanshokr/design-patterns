//this is the code without the command pattern 
//the command pattern is used to encapsulate all command that some class has into individual commands that has perform and an undo option 

// class Calculator{
//     constructor(value){
//         this.value = value;
//     }

//     add(valueToAdd){
//         this.value += valueToAdd;
//     }

//     subtract(valueToSubtract){
//         this.value -= valueToSubtract;
//     }

//     multiply(valueTomultiply){
//         this.value *= valueTomultiply;
//     }

//     divide(valueTODivide){
//         this.value /= valueTODivide;
//     }
// }

// const calculator = new Calculator(1);
// calculator.add(10);
// console.log(calculator.value);
// calculator.subtract(9);
// console.log(calculator.value);


//this is the code with the command pattern 

class Calculator{
    constructor(value){
        this.value = value;
    }

    add(valueToAdd){
        this.value += valueToAdd;
    }

    subtract(valueToSubtract){
        this.value -= valueToSubtract;
    }

    multiply(valueTomultiply){
        this.value *= valueTomultiply;
    }

    divide(valueTODivide){
        this.value /= valueTODivide;
    }
}

//creating a class for each command with execute function and an undo function
class Add{
    constructor(valueToAdd){
        this.valueToAdd = valueToAdd;
    }

    execute(currentValue){
        return currentValue + this.valueToAdd;
    }

    undo(currentValue){
        return currentValue - this.valueToAdd;
    }
}

const add = new Add(89);
console.log(add.execute(8))