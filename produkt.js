const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  document.querySelector(".product_tekst h5").textContent =
    product.productdisplayname;
  document.querySelector(".product_tekst h6").textContent = product.articletype;
  document.querySelector(".product_tekst p .brand").textContent =
    product.brandname;
  document.querySelector(".product_tekst p .category").textContent =
    product.category;

  /* ADD AN EXTRA PARAGRAPH /NODE of brandname */

  document.querySelector(
    ".main_pic"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}

/*
	
id	1525
gender	"Unisex"
category	"Accessories"
subcategory	"Bags"
articletype	"Backpacks"
basecolour	"Navy Blue"
season	"Fall"
productionyear	2010
usagetype	"Casual"
productdisplayname	"Deck Navy Blue Backpack"
parsed	1
soldout	0
relid	1525
price	1299
discount	55
variantname	"Deck Backpack"
brandname	"Puma"
brandbio	"PUMA is the World's Fastest Sports Brand"
brandimage	"http://assets.myntassets.com/assets/images/2015/11/17/11447736932686-113016-3ff8sf.jpg"
agegroup	"Adults-Unisex"
colour1	"NA"
colour2	"NA"
fashiontype	"Fashion"
materialcaredesc	null
sizefitdesc	null
description	"<p>asfafaf<br> kasjhdkashd</p>"
styledesc	null

*/

document.addEventListener("DOMContentLoaded", function () {
  const buyNowButton = document.getElementById("buyNowButton");
  const popup = document.getElementById("popup");
  const popupMessage = document.getElementById("popup-message");
  const closePopup = document.getElementById("closePopup");

  buyNowButton.addEventListener("click", function (event) {
    event.preventDefault();

    popupMessage.textContent = "We have added your choice to your basket.";
    popup.style.display = "block";
  });

  closePopup.addEventListener("click", function () {
    console.log("Close button clicked");
    popup.style.display = "none";
    window.location.href = "produktliste.html"; // Redirect to produktliste.html
  });
});
