export function trimNumber(num) {
  num = Number(num);
  let key = 2;
  let isNegative = false;

  if (num < 0) {
    num = -num;
    isNegative = true;
  }

  if (num < 1) {
    let rightSide = `${num}`.split(".")[1]; //get right side of number

    if (rightSide?.length > 1) {
      rightSide = rightSide.split("");

      for (let i = 0; i < rightSide.length; i++) {
        if (rightSide[i] !== "0" && rightSide[i + 1] !== "0") {
          key = i + 2;
          break;
        }
      }
    }
  }

  num = +(num ? num.toFixed(key) : 0);

  if (isNegative) num = -num;

  return num;
}
// optionally shows 2 non-zero numbers after decimal point
export function trimNumberBitzaim(num) {
  const oldVal = num;
  let key = 2;

  if (+num < 1) {
    num = `${num}`; //to string
    num = num.split(".")[1]; //get right side of number

    if (num?.length > 1) {
      num = num.split("");

      for (let i = 0; i < num.length; i++) {
        if (num[i] !== "0" && num[i + 1] !== "0") {
          key = i + 2;
          break;
        }
      }

      num = parseFloat(oldVal);
    }
  }

  return num ? num.toFixed(key) : 0;
}

export function trimFloatNumber(num, end = 8) {
  if (typeof Number(num) === "number" && !isNaN(Number(num)) && num !== null) {
    num = `${num}`;
    let leftSide, rightSide;

    const separator = num.includes(".") ? "." : num.includes(",") ? "," : false;

    if (separator) {
      leftSide = num.split(separator)[0];
      rightSide = num.split(separator)[1];
      rightSide = rightSide.substring(0, end);
      num = `${leftSide}.${rightSide}`;
    }
  }
  return num;
}
// function that validates @keypress event of inputs and prevents if is not Number
export function validateWholeNumbers(e) {
  if (!e) {
    throw Error("you must use this function on keypress handler");
  }
  if (e.keyCode < 48 || e.keyCode > 57) {
    e?.preventDefault();
    return;
  }
}
