const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
 let index = 0;
  
  document.body.addEventListener("keydown", function(e) {
    const key = parseInt(e.detail || e.which);
    
    console.log("key = " + key);
    console.log("index = " + index);
    console.log("code[index] = " + code[index]);
    
    /* Is this the key? */
    if (code[index] === key) {
      
    /* If yes, lets add 1 to index */
    index ++;
    
    if (index === code.length) {
      alert("Hurray!");
    }
  }else {
    /* if no, lets restart */
    index = 0;
    }
    }
);
}