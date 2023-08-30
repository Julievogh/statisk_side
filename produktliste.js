//fetch

fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //loop

  products.forEach(showProduct);
}

/* <article class="product">
            <h5>Løbebukser</h5>
            <a href="produkt.html"
              ><img src="img/1561.webp" alt="" />
              <p class="brand">Fifa</p>
              <p class="pris"><span></span>kr</p></a
            >
          </article> */

function showProduct(product) {
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);

  copy.querySelector("h5").textContent = product.articletype;
  copy.querySelector("img").src =
    "https://kea-alt-del.dk/t7/images/webp/640/" + product.id + ".webp";
  copy.querySelector("p.brand").textContent = product.productdisplayname;
  copy.querySelector("p.pris").textContent = product.price;

  copy.querySelector(".read-more").setAttribute("href", `produkt.html?id=${product.id}`);


  
  const parent = document.querySelector(".productliste_container");
  parent.appendChild(copy);
}

//clone, change, append

/*


const templateElement = document.querySelector("#myTemplate").content

const myClone = templateElement.cloneNode(true);

myClone.querySelector("h1").textContent = "Hej Verden";

const parentElement = document.querySelector("body");

parentElement.appendChild(myClone);


fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then((data) => showProducts(data));

function showProducs(products) {
  products.foreach(showProduct);
}

function showProduct(product) {
  const template = document.querySelector(".product").content;
  const copy = template.cloneNode(true);
  document.querySelector("main").appendChild(copy);
}
*/
