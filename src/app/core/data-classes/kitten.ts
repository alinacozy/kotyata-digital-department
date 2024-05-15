export class Kitten{
    age: number;
    dateOfCreation: Date;

    constructor(public name: string, public gender:string, public birthday:Date, public type: string){
        let today=new Date();
        this.dateOfCreation=today;
        this.age=Math.ceil((today.getFullYear()-new Date(birthday).getFullYear())*12+(today.getMonth()-new Date(birthday).getMonth()))
        //this.age=Math.ceil((new Date().getTime()-birthday.getTime())/(1000 * 3600 * 24));
        
    }
  }