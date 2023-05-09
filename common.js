//Find common elements in three sorted arrays in JS

const commonElements = (arr1, arr2, arr3) => {
  let commonList = [];
  let currentList = arr1;
  let secondList = arr2;
  let thirdList = arr3;
  currentList.forEach((i) => {
    if (secondList.includes(i)) {
      commonList.push(i);
    }
  });
  currentList = commonList;
  commonList = [];
  currentList.forEach((i) => {
    if (thirdList.includes(i)) {
      commonList.push(i);
    }
  });

  return commonList;
};

arr1 = [10, 3, 29, 87, 6, 65, 23, 99];
arr2 = [2, 78, 99, 12, 1, 90, 3, 100];
arr3 = [23, 3, 16, 99, 88, 1];
arr1 = arr1.sort();
arr2 = arr2.sort();
arr3 = arr3.sort();
console.log("Array 1: ", arr1);
console.log("Array 2: ", arr2);
console.log("Array 3: ", arr3);
console.log("\n");
console.log("Common Elements: ", commonElements(arr1, arr2, arr3));
