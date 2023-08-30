  const list = document.querySelectorAll(".item");
  console.log(`Number of categories: ${list.length}`);


  list.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`); 
   console.log(`Elements: ${item.lastElementChild.children.length}`)
  });

   
  
  // function foo(element){
  //   console.log(`Category: ${element.firstElementChild.textContent}`); 
  // console.log(`Elements: ${element.lastElementChild.children.length}`);
  // }

  // list.forEach(foo);
 
