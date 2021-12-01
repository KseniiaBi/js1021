import {API_KEY} from '/constants.js';
import foo from "/vars.js";
import {user as u, min, max} from '/user.js';
import * as admin from "/admin.js";

console.log(API_KEY);
console.log(u.name);
foo();
console.log(min + max);

console.log(admin);