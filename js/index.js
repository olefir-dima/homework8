function runHW() {
  document.getElementById("arr").innerHTML = "";
  document.getElementById("sum1").innerHTML = "";

  const userInput = prompt('Enter elements of list separating them by ",".');

  if (userInput === null) alert("Ok, bye");
  else if (!userInput.trim()) alert("Nothing entered!");
  else calculateSum(userInput);
}

function calculateSum(userInput) {
  const userArr = userInput.split(",");
  document.getElementById("arr").innerHTML = "[ " + userArr.join(", ") + " ]";

  let sum1 = 0;
  for (const currEl of userArr) {
    if (canConvert2Number(currEl)) {
      sum1 += Number(currEl.trim());
    } else {
      alert("Bad value!");
      return;
    }
  }
  document.getElementById("sum1").innerHTML = sum1;
}

function canConvert2Number(el) {
  if (
    el === null ||
    !el.trim() ||
    (Number(el.trim()) !== 0 && !Number(el.trim()))
  ) {
    return false;
  } else {
    return true;
  }
}
