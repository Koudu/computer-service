import itemDetails from "../ItemDetails";
import "./ItemCard.css";

export default function ItemCard(item) {
  let productBg;
  let btn;
  let closeBtn;
  let buy;
  const clickHandler = () => {
    if (!productBg) {
      return;
    }
    if (productBg.classList.contains("_inactive")) {
      productBg.classList.remove("_inactive");
      productBg.classList.add("_active");
      return;
    }
    productBg.classList.add("_inactive");
    productBg.classList.remove("_active");
  };
  return {
    render: () => {
      return `
      <div class="product">
      <div class="product-background _inactive" id="product-Backgr-${item.id}">
        <header>
        <div class="characteristic-name"> Характеристика: 
        <img id="item-close-btn-${item.id}" 
          class="close" src="./assets/close.svg">
        </img></div>
        </header>
        <main class="product-background__content">
          ${item.description.map((s) => itemDetails(s)).join("")}
        </main>
      </div>
      <img class="photo-product" src="${item.img}"/>
      <button id="item-btn-${item.id}" class="name-product" name="nameProduct">
        ${item.name}</button>
      <div class="price-product">${item.price} ₽</div>
      <button id="item-buy-${item.id}" class="basket basket-green">
        Купить
      </button>
    </div>
      `;
    },
    onRender: () => {
      productBg = document.getElementById(`product-Backgr-${item.id}`);
      closeBtn = document.getElementById(`product-Backgr-${item.id}`);
      btn = document.getElementById(`item-btn-${item.id}`);
      closeBtn = document.getElementById(`item-close-btn-${item.id}`);
      buy = document.getElementById(`item-buy-${item.id}`);
      if (btn) {
        btn.addEventListener("click", clickHandler);
      }
      if (closeBtn) {
        closeBtn.addEventListener("click", clickHandler);
      }
      if (buy) {
        closeBtn.addEventListener("click", clickHandler);
      }
    },
    onDelete: () => {
      if (btn) {
        btn.removeEventListener("click", clickHandler);
      }
      if (closeBtn) {
        closeBtn.removeEventListener("click", clickHandler);
      }
      if (buy) {
        closeBtn.removeEventListener("click", clickHandler);
      }
    },
  };
}
