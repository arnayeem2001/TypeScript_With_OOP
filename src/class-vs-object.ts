export{};
// interface Employee{
//     name:string;
//     salary:number;
// }
// const employeeR: Employee={
//     name:'Abu Bakar',
//     salary:40000,
// }
// const employeeU: Employee={
//     name:'Umar',
//     salary:40000
// }

// class Employee{
//     name:string;
//     salary:number;

//     constructor(name:string,salary:number){
//         this.name=name;
//         this.salary=salary;
//     }
// }

// const employee=new Employee("Abu Bakar",40000);
// const employee2=new Employee("Rakib",40000);

// console.log(employee instanceof Employee)
// console.log(employee2 instanceof Employee)
// employee.salary==60000
// console.log(employee.salary)

class Employee{
constructor(public name:string,
    private _salary:number)    
{}
get salary():number{
    return this.salary;
}
get salaryWithBonus():number{
    return this._salary+5000
}
set salary(newSalary:number){
    if(newSalary<0){
        throw new Error("Salary can not be negative value")
    }
    this._salary=newSalary;
}
}

const employee=new Employee("Abu Bakar",40000);
const employee2=new Employee("Rakib",40000);
employee2.salary=50000
console.log(employee.salaryWithBonus);