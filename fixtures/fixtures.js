import {test as base,expect} from '@playwright/test'
import Logout from '../page-objects/logout';



export const test=base.extend({
    logoutpage:async ({page},use)=>{ //use-special function, used to cusmozed login page
        
        const logoutpage=new Logout(page)
        await use(logoutpage);

    }
});
export{expect};