const categoryImages = {
  accessories: "img/accessories.png",
  apparel: "img/apparel.png",
  footwear: "img/footwear.png",
  freeitems: "img/freeitems.png",
  personalcare: "img/personalcare.png",
  sportinggoods: "img/sportinggoods.png",
};

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then(showCategories);

function showCategories(cats) {
  const categoryContainer = document.querySelector(".category_container");

  cats.forEach((cat) => {
    const categoryLink = document.createElement("a");
    categoryLink.href = `produktliste.html?category=${cat.category}`;

    const categoryImage = document.createElement("img");
    const categoryNameKey = cat.category.toLowerCase().replace(/ /g, "");
    categoryImage.src = categoryImages[categoryNameKey];
    categoryImage.alt = cat.category;

    categoryLink.appendChild(categoryImage);

    categoryContainer.appendChild(categoryLink);
  });
}
