export{};

abstract class UIelement {
    constructor(protected id: string){}
    abstract render():string;
}
class Input extends UIelement{
   constructor(
    id:string,
    private type:string,
    private placeholder:string
   ) {
    super(id);
   }
   render(){
    return `<input id="${this.id}" type="${this.type}" name="${this.id}" placeholder="${this.placeholder}"/>`
   }
}
class Button extends UIelement{
    constructor(
        id:string,
        private label:string
    ){
        super(id)
    }

    render(){
        return`<button id="${this.id}">${this.label}</button>`
    }
}
class Form extends UIelement{
    private children:UIelement[]=[]

    appendChild(child:UIelement){
        this.children.push(child)
    }

    render(){
        const childrenHTML=this.children
        .map((child)=>child.render())
        .join('\n')
        console.log(childrenHTML)
        return `<form id="${this.id}" style='border:1px solid #ccc;padding:20px;display:flex;flex-direction:column;gap:25 px;border-radius:10px ;max-width:300px'>\n ${childrenHTML} \n</form>`
    }
}
 const formElement=new Form('login-form');

 const emailInput= new Input("email",'email',"Enter your email");
 const passwordInput=new Input("pass","password","Enter your password");
 const submitButton=new Button("submit-btn","Submit");

 formElement.appendChild(emailInput);
 formElement.appendChild(passwordInput);
 formElement.appendChild(submitButton);
//  console.log(emailInput.render());
//  console.log(passwordInput.render());
//  console.log(submitButton.render());
console.log(formElement.render())

const rootElement=document.getElementById("root")
if(rootElement){
    rootElement.innerHTML=formElement.render();
}