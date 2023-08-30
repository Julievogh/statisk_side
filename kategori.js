

fetch("https://kea-alt-del.dk/t7/api/categories")
.then(res=>res.json())
.then(showCategories)

function showCategories(cats){
    cats.forEach(showCategory)
        
}

function showCategory(cat) {

//catch
const template = document.querySelector("template").content;

//clone
const clone = template.cloneNode(true);

//change
clone.querySelector("a").textContent=cat.category;
clone.querySelector("a").href =`produktliste.html?category=${cat.category}`;




//append

document.querySelector(".category_container").appendChild(clone);
}