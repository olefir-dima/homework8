function runHW() {
  const userInput = prompt('Enter elements of list separating them by ",".');

  if (userInput === null) alert("Ok, bye");
  else if (!userInput) alert("Nothing entered!");
  else calculateSum(userInput);
}

function calculateSum(userInput) {
  const userArr = userInput.split(",");
  document.getElementById("arr").innerHTML = "[ " + userArr.join(", ") + " ]";

  let sum1 = 0;
  let sum2 = 0;
  for (const currEl of userArr) {
    if (canConvert2Number(currEl)) sum1 += Number(currEl.trim());
    if (canConvert2NumberStartsWithDigits(currEl))
      sum2 += parseFloat(currEl.trim());
  }
  document.getElementById("sum1").innerHTML = sum1;
  document.getElementById("sum2").innerHTML = sum2;
}

function canConvert2Number(el) {
  if (el === null || !el.trim() || !Number(el.trim())) {
    return false;
  } else {
    return true;
  }
}

function canConvert2NumberStartsWithDigits(el) {
  if (el === null || !el.trim() || !parseFloat(el.trim())) {
    return false;
  } else {
    return true;
  }
}
