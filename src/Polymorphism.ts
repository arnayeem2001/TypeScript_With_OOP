export{};

class Employee{
    constructor(
        public name:string,
        protected _salary:number
    ){}
    get salary():number{
        return this._salary;
    }
    set salary(newSalary:number){
        if (newSalary<0){
            throw new Error("Salary cann't be negative value")
        }
        this._salary=newSalary
    }
    calculatePay(taxRate:number){
        return this.salary-this.salary*taxRate;
    }
}

class Manager extends Employee{
    override calculatePay(){
        return this.salary+5000
    }
}
class Developer extends Employee{
    constructor(
        name:string,
        _salary:number,
        public type:string
    ){
        super(name,_salary)
    }
     override calculatePay(taxRate:number){
        return (this.salary+3000)-(this.salary*taxRate)
    }
}

const employee= new Employee("mir",10000)
console.log(employee.calculatePay(0.1))
const manager=new Manager("Mizan",10000)
console.log(manager.calculatePay())
const developer=new Developer("Nayeem",40000,'Backend')
console.log(developer.calculatePay(0.05))