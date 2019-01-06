const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0; 

function init() {
  let body = document.body;
  body.addEventListener('keydown', function(e) {
     
    let key = parseInt(e.which || e.detail);
    
  if (key===code[index]) {index++;
  
  if (index === code.length-1) { index = 0;
  alert("Congrats!");
 }
  
  } else {
    index = 0;
  }

  }
  )
}


