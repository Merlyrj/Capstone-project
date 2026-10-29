const Login2 = require("./login2");

class PoManager2{

    constructor(page){
        this.page=page;
        this.login=new Login2(page);
        //this.dashboard = new Dashboard(page);

    }

    getLogin(){
       // const login = new Login(page);
       return this.login;

    }
    //getDashboard(){
       // const dashboard = new Dashboard(page);
       //return this.dashboard;
    }


module.exports=PoManager2;