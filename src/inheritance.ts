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
    describe():string{
        return `${this.name} earns ${this._salary}`
    }
} 
class Manager extends Employee{
    // teamMemberCount:number;

    // constructor(name:string,_salary:number,teamMemberCount:number){
    //     super(name,_salary);
    //     this.teamMemberCount=teamMemberCount;
    // }

    constructor(name:string,_salary:number,public teamMemberCount:number){
        super(name,_salary);
    }

    describeWork():string{
        return `${this.name} manages ${this.teamMemberCount} people`
    }
    describeSalary():string{
        return `${this.name} earns ${this._salary}`
    }
}

const employee= new Employee("Mir",23000)
console.log(employee.describe())

const manager=new Manager("Mizan",25000,20)
console.log(manager.describe())
console.log(manager.describeWork())
console.log(manager.describeSalary())