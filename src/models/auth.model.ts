export class AuthLoginData {
    username:  string;
    email: string; // sending to our API
    password: string;

    constructor(un:string, pass: string){
        this.username =  un;
        this.email = un;
        this.password = pass;
    }
}