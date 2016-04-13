var number = [];
var x = document.getElementById("number-box");
var y = document.getElementById("length-box");
var z = document.getElementById("total-box");
var a = document.getElementById("average-box");
   
function listNumbers() {
    
  var test = /^\d+$/;
  
  //test input for numbers
  if (!document.getElementById("input").value.match(test))  {  
    
    alert('Whole numbers only please');
    return false;
      
  }
  
  else {  
     //add to array
    number.push(document.getElementById("input").value);
      
    //loop to sum array
    var total = 0;
    for (var i = 0; i < number.length; i++) {
    total += number[i] << 0;
    }
      
    //calculate average
    var average = total / number.length;
  
    //write variables in boxes
    x.innerHTML = number.join('<br/>'); 
    y.innerHTML = number.length; 
    z.innerHTML = total;
    a.innerHTML = average;
      
    return true;  
  }
}

function clearNumbers () {
  number.length = 0;
  var total = 0;
  var average = 0;
  x.innerHTML = number.join('<br/>');
  y.innerHTML = number.length; 
  z.innerHTML = total;
  a.innerHTML = average;
}