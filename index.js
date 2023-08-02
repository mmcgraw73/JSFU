// Import stylesheets
import './style.css';

// Write Javascript code!
const APP = document.getElementById('app');


/**
 * constructor function
 * 
 * whats the difference b/w a constructor fn & and a regular fn?
 * a constructor function is a regular function
 * that requires the use of the reserved word 
 * 'new' when called
 * 
 * what happens when 'new' is called?
 * 1) a {} (aka: emptyO) is created
 * 2) the function is called using emptyO as the context of 'this'
 * 3) emptyO is linked to prototype
 * 4) the function automatically returns emptyO
 * 
 */

const Dad = function (handle, kidCount) {
  this.handle = handle
  this.kidCount = kidCount
}

let michael = new Dad('Supafly', 2)


APP.innerHTML = `which dad? ${michael.handle}`
