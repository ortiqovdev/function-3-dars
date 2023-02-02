//  * function
// * 02.02.2023 10:00

// ! Birinchi masala
// function millisecund(){
// }
// const anonim: () => void = function(){
// }
// type Func = (a:number, b: number)=> string
// const plus: Func = function a(a:number,b :number){
//     return ""
//  }
//  const minus: Func = (a,b)=>{
//     return ""
// } 
// ! Ikkinchi masala
// type Op = ( a:number , b: number)=> number
// function plus(a:number, b: number):number{
//     let c: number = a+b
//     return c
// }
// function minus(a:number, b: number):number{
//     let c: number = a-b
//     return c
// }
// function division(a:number, b: number):number{
//     let c: number = a/b
//     return c
// }
// function multiply(a:number, b: number):number{
//     let c: number = a*b
//     return c
// }

// const operation : Op = minus
// const result: number = operation(10,5)
// console.log(result);
// const c: string = ''

// type ops = '+'|'-'|'/'| '*'
// const calculator = (a:number, b: number, c:ops) => {
// let operation: Op = multiply
// switch(c){
//     case '+': operation = plus; break
//     case '-': operation = minus; break
//     case '/': operation = division; break
//     case '*': operation = multiply; break
// }
//    return operation(a,b)
// }
// const res: number= calculator(10 ,5 , '-')
// console.log(res);

// ! Uchinchi masala 1-usul
// const massiv: number[] = [1, 2, 3, 4, 5]
// const n: number | undefined = massiv.find(v => v > 3 && v < 5)
// console.log(n);
// // ! Uchinchi masala 2-usul

const massiv: number[] = [1, 2, 3, 4, 5, 6]

const n: number | undefined = massiv.find(v => v > 3 && v < 5)

console.log(n)

// -----------------------------------
type Condition = (v: number) => boolean

function find(massiv: number[], condition: Condition): number | undefined {

    for(let v of massiv) {
        if (condition(v)) {
            return v
        }
    }
}

let c: number | undefined = find([3, 2, 4, 5, 1, 12], (v: number) => {
    return v >= 1 && v <= 5 
})

let ccc: number[] = [3, 2, 4, 5, 1, 12]

let c1 = find(ccc, (v: number) => v % 2 == 0 && v > 3)

ccc.find(v => v % 2 == 0 && v > 3)

console.log(c)
console.log(c1)

