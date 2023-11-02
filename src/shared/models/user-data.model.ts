export class UserData {
    name:string
    favourites:any[]
    [key: string]:any
    constructor(name:string,favourites:any[])
    {
        this.name=name;
        this.favourites=favourites;
    }
}
