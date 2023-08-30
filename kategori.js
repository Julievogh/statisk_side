// Define a category-to-image mapping object
const categoryImages = {
accessories: "img/accessories.png",
  apparel: "img/apparel.png",
  footwear: "img/footwear.png",
  freeitems: "img/freeitems.png",
  personalcare: "img/personalcare.png",
  sportinggoods: "img/sportinggoods.png",
  // Add URLs for other categories here
  // For example:
  // category1: "img/category1.png",
  // category2: "img/category2.png",
  // ...
};


// Fetch categories and show category images
fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then(showCategories);

function showCategories(cats) {
  const categoryContainer = document.querySelector(".category_container");

  cats.forEach((cat) => {
    // Create an <a> element
    const categoryLink = document.createElement("a");
    categoryLink.href = `produktliste.html?category=${cat.category}`;

    // Create an <img> element
    const categoryImage = document.createElement("img");
    const categoryNameKey = cat.category.toLowerCase().replace(/ /g, ''); // Convert to lowercase and remove spaces
    categoryImage.src = categoryImages[categoryNameKey]; // Set the image source based on the modified category name
    categoryImage.alt = cat.category; // Set alt text (you can customize this)

    // Append the image to the link
    categoryLink.appendChild(categoryImage);

    // Append the link to the category container
    categoryContainer.appendChild(categoryLink);
  });
}