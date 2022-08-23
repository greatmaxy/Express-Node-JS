//every file is a module

const secret = "SUPER SECRET"


const john = 'john';
const peter = 'peter';

module.exports = {john, peter};

const names = require('./t2.js')
console.log(names);

//doing require('./t1.js') will call the fill regardless
