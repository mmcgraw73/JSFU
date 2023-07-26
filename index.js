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
 */

const Dad = function (handle, kidCount) {
  this.handle = handle
  this.kidCount = kidCount
}

let michael = new Dad('Supafly', 2)


APP.innerHTML = `which dad? ${michael.handle} 
how many kids? ${michael.kidCount}`
