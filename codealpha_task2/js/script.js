
function clearDisplay() {
  document.getElementById("display").innerText = "0";
}
function removeLastCharacter() {
    let display = document.getElementById("display");
    display.innerText = display.innerText.slice(0, -1); // Remove the last character
    if (display.innerText === "") {
        display.innerText = "0"; // Display zero if all text is deleted
    }
}

function appendToDisplay(value) {
  const display = document.getElementById("display");
  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function calculateResult() {
  const display = document.getElementById("display");
  try {
    display.innerText = eval(display.innerText);
  } catch (error) {
    display.innerText = "Error";
  }
}

document.addEventListener("keydown", function (event) {
  console.log(event);
  let del = document.querySelector(".display").value;
  const key = event.key;
  const allowedKeys = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "/",
    "*",
    "-",
    "+",
    "(",
    ")",
    ".",
  ];

  if (key === "Enter") {
    event.preventDefault(); 
    calculateResult();
  } else if (key === "Escape") {
    clearDisplay();
  } else if (allowedKeys.includes(key)) {
    appendToDisplay(key);
  } else if (key === "Backspace") {
    event.preventDefault(); 
    display.innerText = display.innerText.slice(0, -1); 
    if (display.innerText === "") {
      display.innerText = "0"; 
    }
  }
});


document.addEventListener('DOMContentLoaded', function() {
   
    const buttons = document.querySelectorAll('.calculator button');

    
    buttons.forEach(button => {
        
        button.addEventListener('mouseover', () => {
            button.style.cursor = 'pointer';
            button.style.backgroundColor = '#5285c93f'; 
        });

       
        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = ''; 
        });

        button.addEventListener('mousedown', () => {
            button.style.transform = 'scale(0.90)'; 

        });

        button.addEventListener('mouseup', () => {
            button.style.transform = ''; 
        });
    });
});
