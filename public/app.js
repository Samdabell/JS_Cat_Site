var newCat = { name: "Jess", favFood: "Pizza", imgURL: "https://usercontent2.hubstatic.com/12598625_f520.jpg" }

var addCat = function(cat){
  var catUl = document.createElement("ul");
  catUl.classList.add("cat");

  var name = document.createElement("li");
  name.innerText = "Name: " + cat.name;

  var food = document.createElement("li");
  food.innerText = "Favourite food: " + cat.favFood;

  var pic = document.createElement("li");
  var image = document.createElement("img");
  image.width = 500;
  image.src = cat.imgURL;
  pic.appendChild(image);

  catUl.appendChild(name);
  catUl.appendChild(food);
  catUl.appendChild(pic);

  var cats = document.querySelector("#cats");
  cats.appendChild(catUl);
}

window.onload = function(){
  addCat(newCat);
};