export{};

interface User{
    id:string,
    name:string,
    email:string
}
const updateProfile=(id:string,date:Partial<User>)=>{};
updateProfile('sasds',{name:'Nayeem'})

interface config{
    apikey?:string;
    timeout?:number
}
const initialize=(config:Required<config>)=>{

};
initialize({apikey:'sdhnsbdn',timeout:30000});

interface product{
    id:number;
    name:string;
    price:number;
    descripton:string
}
type productPreview=Pick<product,'name'|'descripton'>
const preview:productPreview={
    name:'ABC',
    descripton:'sdk'
};

interface product1{
    id:number;
    name:string;
    salary:number;
    nid:number
}
type productPreview1=Omit<product1,'salary'|'nid'>
const preview1:productPreview1={
    id:743,
    name:'ABC',
    
};

type Environment='development'|'staging'|'production'
const apiUrls:Record<Environment,string>={
    development:'http://localhost:5500',
    staging:'https://staging.api.com',
    production:'https://api.com'
};
