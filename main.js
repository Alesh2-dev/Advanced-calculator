let calculation = '';

let input = document.querySelector('.console');


function updateCalculator (number) {

const answer = document.querySelector('.console');
  
  if (number === 'ON') {
      calculation = 0;
  }
  
  else if (number === 'OFF' || calculation === '') {
  
      calculation = '';
      
    }
  
  else if (number === 'C' || number === 'AC') {
        
        calculation = 0;
        
    }
  
  else if (calculation === 0) {
  
      calculation = number;
  
  }
  
  else{

      calculation += number;
      
  };

  return calculation;

}
  

function display () {
  
  input.value = `${calculation}`;
    
  console.log(input.value);
  
  return input.value;  

}

// <!---------------------- Powered by Alesh ---------------------->