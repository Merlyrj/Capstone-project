const { test } = require("@playwright/test");
const { readExcelData } = require("../utils/excelReader")

test('read testdata from excel', async()=>{
  const users = await readExcelData('C:/Users/rasin/OneDrive/Desktop/users.xlsx','Sheet1') ; 
for(const user of users){
    console.log ('firstname:',user.firstname);
    console.log ('lastname:',user.lastname);
    console.log ('email:',user.email);
}
});