function load() {
  var btns = document.querySelectorAll("#calculator span");
  var operators = ["+", "-", "x", "÷"];
  var inputScreen = document.querySelector("#screen");
  var decimalAdded = false;
  var btnValue;
  var input;

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      btnValue = this.innerHTML;
      input = inputScreen.innerHTML;

      if (btnValue === "C") {
        inputScreen.innerHTML = "";
        decimalAdded = false;
      } else if (btnValue === "=") {
        var lastChar = input[input.length - 1];
        input = input.replace(/x/g, "*").replace(/÷/g, "/");
        if (operators.indexOf(lastChar) > -1 || lastChar === ".") {
          input = input.slice(0, -1);
        }
        if (input) {
          try {
            inputScreen.innerHTML = eval(input);
          } catch (e) {
            inputScreen.innerHTML = "Error";
          }
        }
        decimalAdded = false;
      } else if (btnValue === ".") {
        if (!decimalAdded) {
          inputScreen.innerHTML += btnValue;
          decimalAdded = true;
        }
      } else if (operators.indexOf(btnValue) > -1) {
        var lastChar = input[input.length - 1];
        if (input !== "" && operators.indexOf(lastChar) === -1) {
          inputScreen.innerHTML += btnValue;
        } else if (input === "" && btnValue === "-") {
          inputScreen.innerHTML += btnValue;
        }
        if (operators.indexOf(lastChar) > -1 && input.length > 1) {
          inputScreen.innerHTML = input.slice(0, -1) + btnValue;
        }
        decimalAdded = false;
      } else {
        inputScreen.innerHTML += btnValue;
      }
    });
  }
}
