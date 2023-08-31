document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("brands");

  fetch("https://kea-alt-del.dk/t7/api/brands")
    .then((res) => res.json())
    .then(showBrands);

  function showBrands(brands) {
    brands.forEach(showBrand);
  }

  function showBrand(brand) {
    if (brand.brandbio === null) {
      return; // Skip this brand with null brandbio
    }

    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);

    copy.querySelector("h3").textContent = brand.brandname;
    copy.querySelector("h4").textContent = brand.brandbio;

    copy.querySelector("p").addEventListener("click", function () {
      const brandName = brand.brandname;
      window.location.href = `produktliste.html?brand=${encodeURIComponent(
        brandName
      )}`;
    });

    const parent = document.querySelector(".brands_container");
    parent.appendChild(copy);
  }
});
