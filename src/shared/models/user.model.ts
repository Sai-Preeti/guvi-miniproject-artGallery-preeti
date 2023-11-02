export class User {
    id:number
    name:string
    email:string
    password:string
    favourites:any[]
    [key: string]:any
    constructor(id:number,name:string,email:string,password:string,favourites:any[])
    {
        this.id=id;
        this.name=name;
        this.email=email;
        this.password=password;
        this.favourites=favourites;
    }
}
