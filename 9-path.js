const os  = require("os");
const path = require("path");
console.log(path.sep);

const filePath = path.join("/content", "text.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "text.txt");
console.log(absolute);

// info about current user
const user = os.userInfo();
// console.log(user);

//method return the system uptime in seconds
// console.log(`System uptime is: ${os.uptime()} seconds`);

//object currentOS

const currentOs = {
    name: os.type(), 
    release: os.release(), 
    totalMem: os.totalmem(), 
    freeMem: os.freemem(),  

}

// console.log(currentOs)