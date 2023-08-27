fetch("https://kea-alt-del.dk/t7/api/products/1163")
  .then(headersReceived)
  .then(dataReceived);

function headersReceived(response) {
  console.log(response);
  return response.json();
}

function dataReceived(data) {
  console.log(data);
}

/* can be written like this too: */

fetch("https://kea-alt-del.dk/t7/api/products/1163")
  .then(function headersReceived(response) {
    return response.json();
  })
  .then(function dataReceived(data) {
    console.log(data);
  });

/* or even more simple */

fetch("https://kea-alt-del.dk/t7/api/products/1163")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

/* ANOTHER syntax */

async function getData() {
  const response = await fetch("https://kea-alt-del.dk/t7/api/products/1163");
  const data = await response.json();
  console.log(data);
}
getData();
