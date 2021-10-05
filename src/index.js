// CommonJS
require("regenerator-runtime/runtime");
// ECMAScript 2015
import "regenerator-runtime/runtime.js";
import router from './routes/index';
window.addEventListener('load',router);
window.addEventListener('hashchange',router);