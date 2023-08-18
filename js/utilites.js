// get an element by id
function getAnElementById(id) {
  const element = document.getElementById(id);
  return element;
}

// get two field id and return multiplied value
function getMultipliedValue(id1, id2) {
  const input1 = getAnElementById(id1);
  const input2 = getAnElementById(id2);
  const value1 = parseFloat(input1.value);
  const value2 = parseFloat(input2.value);
  input1.value = "";
  input2.value = "";
  if (isNaN(value1) || isNaN(value2)) {
    return false;
  } else {
    const result = value1 * value2;
    return parseFloat(result.toFixed(2));
  }
}

// set text to an element
function setText(id, text) {
  const element = getAnElementById(id);
  element.innerHTML = text;
  return element;
}

// add class
function addClass(id) {
  getAnElementById(id).classList.add("hidden");
}
// remove class
function removeClass(id) {
  getAnElementById(id).classList.remove("hidden");
}

// create new element
function createNewElement(sub, result) {
  const container = getAnElementById("added-result");
  const count = container.childElementCount;
  const resultElement = document.createElement("div");

  resultElement.classList.add(
    "flex",
    "justify-between",
    "flex-wrap",
    "card-actions",
    "w-full",
    "flex",
    "items-center",
    "mb-5"
  );

  resultElement.innerHTML = `<div class="flex flex-wrap"><p id="fieldName" class="text-base text-[#414141] mr-3 ">${
    count + 1
  }.${sub}</p>
<p id="result" class="text-base break-words text-[#414141]"><span>${result}</span> cm<sup>2</sup></p></div>
<button class=" px-3 py-1 rounded-md hover:bg-blue-300 bg-blue-400  text-white ">
  Covert to m<sup>2</sup>
</button>`;
  container.appendChild(resultElement);
}
