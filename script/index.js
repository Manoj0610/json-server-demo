// json get request
let getProduct = async () => {
  let res = await fetch(`http://localhost:3000/data`);
  let data = await res.json();
  //   clg;
  display(data);
};
getProduct();

// append the data
const display = (data) => {
  let container = document.querySelector("#container");
  container.innerHTML = null;

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
      editProduct();
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

// Edit the Product

// Add the product
