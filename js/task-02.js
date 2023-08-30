const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const elements = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList = "item";
  console.log(item)
  return item;
})
console.log(elements)
const addElements = document.querySelector('#ingredients');
addElements.append(...elements);


// const list0 = document.createElement("li")
// console.log(list0);
// list0.textContent = ingredients[0];
// list0.classList.add("item");

// const list1 = document.createElement("li")
// console.log(list1);
// list1.textContent = ingredients[1];
// list1.classList.add("item");

// const list2 = document.createElement("li")
// console.log(list2);
// list2.textContent = ingredients[2];
// list2.classList.add("item");

// const list3 = document.createElement("li")
// console.log(list3);
// list3.textContent = ingredients[3];
// list3.classList.add("item");

// const list4 = document.createElement("li")
// console.log(list4);
// list4.textContent = ingredients[4];
// list4.classList.add("item");

// const list5 = document.createElement("li")
// console.log(list5);
// list5.textContent = ingredients[5];
// list5.classList.add("item");

// const ul = document.querySelector('#ingredients');

// ul.append(list0, list1, list2, list3, list4, list5) 