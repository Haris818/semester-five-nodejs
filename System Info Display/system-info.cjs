const os = require('os');

console.log("=== System Info ===");
console.log("OS Platform: ", os.platform());
console.log("CPU Architecture: ", os.arch());

console.log("Total Memory: ", (os.totalmem() / 1024 / 1024).toFixed(2), "MB");
console.log("Free Memory: ", (os.freemem() / 1024 / 1024).toFixed(2), "MB");

console.log("Home Directory: ", os.homedir());
