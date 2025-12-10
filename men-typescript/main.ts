// let student:string = "umar";
// console.log(student);


// let age:number;
// age = 20;
// console.log(age);

// let active:boolean = true;
// console.log(active);

// type PersonType = {
//     name:string;
//     age:number;
//     city:string;
//     isStudent:boolean;
// }
// let person:PersonType;
// person = {
//     name:"umar",
//     age:20,
//     city:"bishkek",
//     isStudent:true
// }
// let ramzan:PersonType;
// ramzan = {
//     name:"roma",
//     age:35,
//     city:"pedofil",
//     isStudent:true
// }

// let numders:object = [10, 20, 30, 40, 50];

// function umar(name:string, age:number,isActive:boolean): void { 
//  for (let i = 1; i <= age; i++) {
    
//     console.log(i);
//  }
// }

// umar("umar", 20,true);


function calculator(number1: number, number2: number, operator: string): number {
    switch (operator) {
        case "+":
            return number1 + number2;
        case "-":
            return number1 - number2;
        case "*":
            return number1 * number2;
        case "/":
            return number1 / number2;
        default:
            throw new Error("Неизвестная операция");
    }
}

console.log(calculator(10, 5, "+")); // 15
console.log(calculator(10, 5, "-")); // 5
console.log(calculator(10, 5, "*")); // 50
console.log(calculator(10, 5, "/")); // 2


function sumThree(a: number, b: number, c: number): number {
    return a + b + c;
}

console.log(sumThree(1, 2, 3)); // 6
