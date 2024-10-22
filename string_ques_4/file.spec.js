import { frontDoorResponse, frontDoorPassword, backDoorResponse, backDoorPassword } from './file.js'

console.log(frontDoorResponse('Stands so high')); 
console.log(frontDoorPassword('SHIRE'));  
console.log(frontDoorPassword('shire'));
console.log(backDoorResponse('Stands so high'));     
console.log(backDoorResponse('Stands so high   '));  
console.log(backDoorPassword('horse'));
