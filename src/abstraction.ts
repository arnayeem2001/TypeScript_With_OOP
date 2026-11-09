export{};

abstract class Employee{
    constructor(
        public name:string,
        protected _salary:number
    ){}
    get salary():number{
        return this._salary
    }
    set salary(newSalary:number){
        if(newSalary<0){
            throw new Error("Salary cann't be negative value")
        }
        this._salary=newSalary
    }
    abstract calculatePay():number;
    abstract getResources():string[];
    abstract registerEntryTime():string;
}
// class Manager extends Employee{
//     calculatePay(){
//         return this.salary+5000
//     }
// }
// class Developer extends Employee{
//     calculatePay(){
//         return this.salary+3000
//     }
// }
// class Resources extends Employee{
//     getResources(){
//         return this.salary+3000
//     }
// }


