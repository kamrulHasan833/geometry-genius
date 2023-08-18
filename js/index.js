// get triangle area
function getTriangleArea() {
  const multipliedInputValue =
    getMultipliedValue("triangle-floor ", "triangle-height") * 0.5;
  const area = parseFloat(multipliedInputValue.toFixed(2));
  setText("triangle-result", area);
  addClass("triangle-error");
  if (!multipliedInputValue) {
    removeClass("triangle-error");
    setText("triangle-error", "Invalide input! Only number allowed.");
  } else {
    setText("triangle-result", area);
    createNewElement("Triangle", area);
  }
}

// get regtangle area
function getRectangleArea() {
  const area = getMultipliedValue("rectangle-width", "rectangle-length");
  setText("rectangle-result", 0);
  addClass("rectangle-error");
  if (!area) {
    removeClass("rectangle-error");
    setText("rectangle-error", "Invalide input! Only number allowed.");
  } else {
    setText("rectangle-result", area);
    createNewElement("Rectangle", area);
  }
}

// get regtangle area
function getParallelogramArea() {
  const area = getMultipliedValue(
    "parallelogram-floor",
    "parallelogram-height"
  );
  setText("parallelogram-result", 0);
  addClass("parallelogram-error");
  if (!area) {
    removeClass("parallelogram-error");
    setText("parallelogram-error", "Invalide input! Only number allowed.");
  } else {
    setText("parallelogram-result", area);
    createNewElement("Parallelogram", area);
  }
}

// get rhombus area
function getRhombusArea() {
  const area = getMultipliedValue("rhombus-d1", "rhombus-d2") * 0.5;
  setText("rhombus-result", 0);
  addClass("rhombus-error");
  console.log(area);
  if (!area) {
    removeClass("rhombus-error");
    setText("rhombus-error", "Invalide input! Only number allowed.");
  } else {
    setText("rhombus-result", area);
    createNewElement("Rhombus", area);
  }
}

// get pentagon area
function getPentagonArea() {
  const area = getMultipliedValue("pentagon-p", "pentagon-b") * 0.5;
  setText("pentagon-result", 0);
  addClass("pentagon-error");
  console.log(area);
  if (!area) {
    removeClass("pentagon-error");
    setText("pentagon-error", "Invalide input! Only number allowed.");
  } else {
    setText("pentagon-result", area);
    createNewElement("Pentagon", area);
  }
}

// get ellipse area
function getEllipseArea() {
  const multipliedValue =
    getMultipliedValue("ellipse-a", "ellipse-b") * 3.141592;
  const area = parseFloat(multipliedValue.toFixed(2));
  setText("ellipse-result", 0);
  addClass("ellipse-error");
  console.log(area);
  if (!area) {
    removeClass("ellipse-error");
    setText("ellipse-error", "Invalide input! Only number allowed.");
  } else {
    setText("ellipse-result", area);
    createNewElement("Ellipse", area);
  }
}
