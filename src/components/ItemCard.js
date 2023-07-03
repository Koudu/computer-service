/*
item: {
  id: 1212213233;
  description: [
     "Сокет  -  LGA1200",
      "Общее кол-во ядер - 4",
  ],
  img: "./sssd",
  name: "Intel Core i3-10100f",
  price: 5000
}
*/
import itemDetails from "./ItemDetails";

export default function ItemCard(item) {
  let productBg;
  let btn;
  const clickHandler = () => {
    if (!productBg) {
      return;
    }
    //
  };
  return {
    render: () => {
      return `
      <div class="product">
      <div class="product-background _inactive" id="product-Backgr-${item.id}">
        <div class="characteristic-name"> Характеристика: </div>
        ${item.description.map((s) => itemDetails(s)).join("")}
      </div>
      <img src="${item.img}"/>
      <button class="name-product" name="nameProduct">${item.name}</button>
      <div class="price-product">${item.price} ₽</div>
      <button id="item-btn-${item.id}" class="basket basket-green">
        Купить
      </button>
    </div>
      `;
    },
    onRender: () => {
      productBg = document.getElementById(`product-Backgr-${item.id}`);
      btn = document.getElementById(`item-btn-${item.id}`);
      if (btn) {
        btn.addEventListener("click", clickHandler);
      }
    },
    onDelete: () => {
      if (btn) {
        btn.removeEventListener("click", clickHandler);
      }
    },
  };
}
