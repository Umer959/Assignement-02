// Program # 01
let addingResult = addTwoNumbers(3);
addingResult(2);

function addTwoNumbers(add_1) {
  return function (add_2) {

    console.log("Answer is : " + Number(add_1 + add_2));
  }
}


//Program # 02
function searchArray(numArray, val) {
  if (numArray.length === 0) {
    return false;
  } else if (numArray[0] === val) {
    return true;
  } else {
    return searchArray(numArray.slice(1), val);
  }
}

const numArray = [10, 20, 30, 40, 50];
const num1 = 45;
const num2 = 20;
console.log("Array search: " + searchArray(numArray, num1));
console.log("Array search: " + searchArray(numArray, num2));


// Program # 03
function addNewParagraph(message) {
  const paragraph_1 = document.getElementById("demo");
  const paragraph_2 = document.createTextNode(message);
  paragraph_1.appendChild(paragraph_2);
  document.body.appendChild(paragraph_1);
}

addNewParagraph("Welcome to Saylani Mass Training JavaScript Online Course Batch 02 !!");

// Program # 04
function addNewListItem(text) {
  const fruitList = document.getElementById("fruitList");
  const addNewItem = document.createElement("li");
  addNewItem.appendChild(document.createTextNode(text));

  const finalList = document.querySelector('ul');
  finalList.appendChild(addNewItem);
}

addNewListItem("Apple");



// Program # 05
function backgroundColorChange(element, color,) {
  element.style.backgroundColor = color;
}
const divText = document.getElementById('randomText');
backgroundColorChange(divText, 'green');





//program # 06
function saveObjectInLocalStorage(key, object) {

  console.log(object);

  const stringJSONObj = JSON.stringify(object);
  console.log(stringJSONObj);


  localStorage.setItem(key, stringJSONObj)


}

const demoObject = {
  name: "John Alias",
  age: 40,
  city: "United States"
};

saveObjectInLocalStorage("saveKey", demoObject);

// Problem # 07
function getObjectFromLocalStorage(key) {
  var getData;

  const JsonObj = localStorage.getItem(key);
  if (!JsonObj) {
    return null;
  }
  else {
    getData = JSON.parse(JsonObj)
    console.log(getData);
  }
  return getData;

}

getObjectFromLocalStorage("saveKey");



// Problem # 08
function saveObjectInLocalStorage(obj) {
  // Save each property to localStorage using property name as key and value as value
  Object.keys(obj).forEach(key => {
    console.log(key);
    localStorage.setItem(key, JSON.stringify(obj[key]));
  });

  // Retrieve the object from localStorage and return it as a new object
  const newObj = {};
  Object.keys(obj).forEach(key => {
    newObj[key] = JSON.parse(localStorage.getItem(key));
  });
  return newObj;
}

const object = {
  name: "Steve Smith",
  age: 35,
  city: "Australia"
};
const savedObj = saveObjectInLocalStorage(object);
console.log(savedObj);
















































