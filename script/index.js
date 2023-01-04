// json get request
let data;
let getProduct = async () => {
  let res = await fetch(`https://amaranth-quail-vest.cyclic.app/data`);
  data = await res.json();
  //   clg;
  display(data);
};
getProduct();

// append the data
const display = (data) => {
  let container = document.querySelector("#container");
  container.innerHTML = "";

  data.map((item, index) => {
    // create elements
    let div = create("div");
    let btn = create("div");
    let image = create("img");
    let title = create("p");
    let brand = create("p");
    let price = create("p");
    let edit = create("button");
    let remove = create("button");

    // innerText
    btn.setAttribute("class", "btn_wrapper");

    image.setAttribute("class", "product_image");
    image.src = item.image;

    title.innerText = item.title;
    brand.innerText = item.brand;
    price.innerText = `$ ${item.price}`;

    remove.innerText = "Delete";
    remove.setAttribute("class", "delete_prod");
    remove.addEventListener("click", () => {
      deleteProduct(item.id);
    });

    edit.innerText = "Edit";
    edit.setAttribute("class", "edit_prod");
    edit.addEventListener("click", () => {
      editProduct(item.id);
    });

    // append
    btn.append(remove, edit);
    div.append(image, title, brand, price, btn);
    container.append(div);
  });
};

const create = (x) => {
  return document.createElement(x);
};

// Delete the product
const deleteProduct = async (id) => {
  let res = await fetch(`https://amaranth-quail-vest.cyclic.app/data/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  let del = await res.json();
  getProduct();
  console.log(del);
};

// Edit the Product

const editProduct = () => {
  window.location.href = "update.html";
};

// update Product
const UpdateProduct = async () => {
  event.preventDefault();
  let category = document.querySelector("#category").value;
  let name = document.querySelector("#name").value;
  let image = document.querySelector("#image").value;
  let price = document.querySelector("#price").value;
  let brand = document.querySelector("#brand").value;
  // let id = data.length + 1;
  let obj = {
    title: name,
    image: image,
    price: price,
    brand: brand,
    category: category,
  };

  let res = await fetch(`https://amaranth-quail-vest.cyclic.app/data/${id}`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: { "Content-Type": "application/json" },
  });
  let data = await res.json();
  alert("Product Added");
  console.log(data);
  getProduct();
};

// Add the product
const AddProduct = async (event) => {
  event.preventDefault();
  let category = document.querySelector("#category").value;
  let name = document.querySelector("#name").value;
  let image = document.querySelector("#image").value;
  let price = document.querySelector("#price").value;
  let brand = document.querySelector("#brand").value;
  // let id = data.length + 1;
  let obj = {
    title: name,
    image: image,
    price: price,
    brand: brand,
    category: category,
  };

  let res = await fetch(`https://amaranth-quail-vest.cyclic.app/data`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: { "Content-Type": "application/json" },
  });
  let data = await res.json();
  alert("Product Added");
  console.log(data);
  getProduct();
};
