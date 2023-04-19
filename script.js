const numberConvert = (inputNumber, inNumberBase, outNumberBase) => {
  return parseFloat(inputNumber, inNumberBase).toString(outNumberBase);
};

function textToNumber(value) {
  switch (value) {
    case "Binary":
      return 2;

    case "Octal":
      return 8;

    case "Decimal":
      return 10;

    case "Hexadecimal":
      return 16;

    default:
      return -1;
  }
}

// check valid binary number
function isValidBinary(number) {
  const binaryRegex = /^[0-1-.]+$/;
  return binaryRegex.test(number);
}

// check valid octal number
function isValidOctal(number) {
  const octalRegex = /^[0-7-.]+$/;
  return octalRegex.test(number);
}x

// check valid decimal number
function isValidDecimal(number) {
  const decimalRegex = /^[0-9-.]+$/;
  return decimalRegex.test(number);
}

// check valid hexadecimal number
function isValidHexadecimal(number) {
  const hexadecimalRegex = /^[0-9a-fA-F-.]+$/;
  return hexadecimalRegex.test(number);
}

// Entered number by user is a valid number
function checkValidNumber(number, base) {
  switch (base) {
    case "Binary":
      return isValidBinary(number);

    case "Octal":
      return isValidOctal(number);

    case "Decimal":
      return isValidDecimal(number);

    case "Hexadecimal":
      return isValidHexadecimal(number);

    default:
      return false;
  }
}


function handelInputNumberType() {
  // Get the selected value from the select element
  let selectedValue = document.getElementById("inputNumberType").value;

  // update heading text
  document.getElementById("headingFrom").innerHTML = selectedValue;

  // update input box label text
  document.getElementById("labelFrom").innerHTML = selectedValue;

  // update input box RHS text value which is denote base of user input number
  document.getElementById("userInputBase").innerHTML =
    textToNumber(selectedValue);
}

function handelOutputNumberType() {
  // Get the selected value from the select element
  let selectedValue = document.getElementById("outputNumberType").value;

  // update heading text
  document.getElementById("headingTo").innerHTML = selectedValue;

  // update input box label text
  document.getElementById("labelTo").innerHTML = selectedValue;

  // update output result box RHS text value which is denote base of user output number
  document.getElementById("userOutputBase").innerHTML =
    textToNumber(selectedValue);
}


function getResult() {

  const inputNumber = document.getElementById("inputNumber").value;
  const inputNumberType = document.getElementById("inputNumberType").value;
  const outNumberBase = textToNumber(
    document.getElementById("outputNumberType").value
  );


  const inNumberBase = textToNumber(inputNumberType);
  if (checkValidNumber(inputNumber, inputNumberType)) {
    result = numberConvert(inputNumber, inNumberBase, outNumberBase);
    document.getElementById("outputNumber").value = result;
  }
  else {
    document.getElementById("outputNumber").value = `Enter valid ${inputNumberType} number`;
  }
}


// swap Selection 
function swapSelection() {

  // select index and value of current selections
  const select1 = document.getElementById("inputNumberType");
  const select2 = document.getElementById("outputNumberType");
  const selectedIndex1 = select1.selectedIndex;
  const selectedValue1 = select1.value;
  const selectedIndex2 = select2.selectedIndex;
  const selectedValue2 = select2.value;


  // swap value and index of selections
  select1.selectedIndex = selectedIndex2;
  select1.value = selectedValue2;
  select2.selectedIndex = selectedIndex1;
  select2.value = selectedValue1;

  handelInputNumberType();
  handelOutputNumberType();
}