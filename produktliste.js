document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const brandName = urlParams.get("brand");
  const category = urlParams.get("category");

  if (brandName) {
    fetchBrandDetails(brandName);
    fetchProductsByBrand(brandName);
  } else if (category) {
    fetchProductsByCategory(category);
  }

  function fetchBrandDetails(brandName) {
    fetch("https://kea-alt-del.dk/t7/api/brands/" + brandName)
      .then((res) => res.json())
      .then(function (brand) {
        showBrandNameh2(brand);
        fetchProductsByBrand(brandName);
      });
  }

  function fetchProductsByBrand(brandName) {
    fetch("https://kea-alt-del.dk/t7/api/products?brandname=" + brandName)
      .then((res) => res.json())
      .then(showProducts);
  }

  function fetchProductsByCategory(category) {
    fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}`)
      .then((res) => res.json())
      .then(showProducts);
  }

  function showProducts(products) {
    products.forEach(showProduct);
  }

  function showProduct(product) {
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);

    copy.querySelector("h5").textContent = product.articletype;
    copy.querySelector("img").src =
      "https://kea-alt-del.dk/t7/images/webp/640/" + product.id + ".webp";
    copy.querySelector("p.brand").textContent = product.productdisplayname;
    copy.querySelector("p.pris").textContent = product.price + " dkr";

    copy
      .querySelector(".read-more")
      .setAttribute("href", `produkt.html?id=${product.id}`);

    if (product.soldout == true) {
      copy.querySelector("p.pris").textContent = "sold out";
      copy.querySelector("article .pris").classList.add("soldout_color");
      copy.querySelector("article img").classList.add("soldout");
    }

    const parent = document.querySelector(".productliste_container");
    parent.appendChild(copy);
  }
});
