const rowsInput = document.getElementById("rows-input");
const pyramidContainer = document.getElementById("pyramid-container");
const resultContainer = document.getElementById("result-container");

const exampleOne = [[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]];
const exampleTwo = [
  [75],
  [95, 64],
  [17, 47, 82],
  [18, 35, 87, 10],
  [20, 4, 82, 47, 65],
  [19, 1, 23, 75, 3, 34],
  [88, 2, 77, 73, 7, 63, 67],
  [99, 65, 4, 28, 6, 16, 70, 92],
  [41, 41, 26, 56, 83, 40, 80, 70, 33],
  [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
  [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
  [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
  [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
  [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
  [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23],
];

let pyramid = [];

const findFastestPath = (pyramid) =>
  pyramid.reduceRight((bottomRow, topRow) =>
    topRow.map((path, i) => path + Math.min(bottomRow[i], bottomRow[i + 1]))
  )[0];

const generatePyramid = () => {
  for (let i = 1; i <= rowsInput.value; i++) {
    const array = Array.from({ length: i }, () =>
      Math.floor(Math.random() * 99 + 1)
    );
    pyramid.push(array);
  }
};

const displayExample = (opt) => {
  if (opt === "one") {
    pyramid = exampleOne;
    rowsInput.value = 4;
  } else {
    pyramid = exampleTwo;
    rowsInput.value = 15;
  }
};

const printPyramid = (pyramid) => {
  pyramid.forEach((row) => {
    let list = document.createElement("li");
    list.innerHTML = row.join("__");
    pyramidContainer.appendChild(list);
  });
};

const printResult = () => {
  resultContainer.innerText = findFastestPath(pyramid);
};

const clear = () => {
  pyramid = [];
  pyramidContainer.innerHTML = "";
  resultContainer.innerHTML = "";
};

const submit = (opt) => {
  clear();

  if (!opt && rowsInput.value <= 0) {
    window.alert("Please enter a value");
    return;
  }

  opt ? displayExample(opt) : generatePyramid();

  printPyramid(pyramid);
  printResult();
};
