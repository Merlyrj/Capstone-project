const Dashboard = require("./dashboard");
const Login = require("./login");

class PoManager{

    constructor(page){
        this.page=page;
        this.login=new Login(page);
        this.dashboard = new Dashboard(page);

    }

    getLogin(){
       // const login = new Login(page);
       return this.login;

    }
    getDashboard(){
       // const dashboard = new Dashboard(page);
       return this.dashboard;
    }
}

module.exports=PoManager;