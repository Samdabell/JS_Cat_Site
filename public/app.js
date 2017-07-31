var newCat = { name: "Jess", favFood: "Pizza", imgURL: "https://usercontent2.hubstatic.com/12598625_f520.jpg" }

var catArray = [
  { name: "Boba", favFood: "Sock fluff", imgURL: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg" },
  { name: "Barnaby", favFood: "Tuna", imgURL: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg" },
  { name: "Max", favFood: "Whiskas Temptations", imgURL: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg" },
  newCat
];

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
  catArray.forEach(addCat);
};