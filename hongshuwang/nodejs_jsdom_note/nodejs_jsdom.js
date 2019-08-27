// const fs = require('fs');
// fs.readFile('test.html', 'utf8', function (err, data) {
//     if (err) throw err;
//     console.log(data);
// });

const jsdom = require("C:\\Users\\Administrator\\node_modules\\jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
console.log(dom.window.document.querySelector("p").textContent); // "Hello world"
function test(){
    return "Hello world"
};
