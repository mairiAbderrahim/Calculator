const myFunction = (event) => {
    const calculatorOutput = document.getElementsByClassName("calculator__output")[0];
    const inputValue = event.target.value;
    const meow = new Audio("audiomass-output.mp3");
  
    if (inputValue === "=") {
      try {
        meow.play();
        // Use eval() to calculate the result (Note: eval() can be risky if input is not properly sanitized)
        const result = eval(calculatorOutput.innerHTML);
        calculatorOutput.innerHTML = result;
      } catch (error) {
        calculatorOutput.innerHTML = "Error";
      }
    } else if (inputValue === "AC") {
      // Clear the calculator's output
      calculatorOutput.innerHTML = "";
    } else if (inputValue === "DE") {
      // Delete the last character from the calculator's output
      calculatorOutput.innerHTML = calculatorOutput.innerHTML.slice(0, -1);
    } else {
      calculatorOutput.innerHTML += inputValue;
    }
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    const calculatorButtons = document.querySelectorAll(".calculator__button");
    calculatorButtons.forEach((button) => {
      button.addEventListener("click", myFunction);
    });
  });
  