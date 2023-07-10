export default function Basket(rootEl) {
  let basketBg;
  let basketmenu;
  let active = false;

  const onClick = () => {
    if (!active) {
      basketmenu.classList.remove("_inactive");
      basketmenu.classList.add("_active");
      active = !active;
      return;
    }
    basketmenu.classList.add("_inactive");
    basketmenu.classList.remove("_active");
    active = !active;
  };
  const body = document.querySelector("body");

  body?.addEventListener("click", (e) => {
    const name = e.target.getAttribute("name");
    if (name === "to-order") {
      alert("Ожидайте заказ!");
    }
  });

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return {
    render(item) {
      rootEl.innerHTML = `
      <div class="basket-btn" id="item-bascet-btn">
        <div class="bascet-background ${active ? "_active" : "_inactive"}" 
          id="bascet-Backgr">
          <header class="text-bascet">Корзина</header>
          <div class="bascet-product" id="bascet-product">
          ${item.map((value) => `<div class="bascet-product__item">${value.name}: ${value.price}</div>`).join("")}
          </div>
          <footer>
            <button class="to-order to-order-green" name="to-order">Заказать</button>
          </footer>
        </div>
      </div>
      `;
    },
    onRender() {
      basketBg = rootEl.querySelector(`#item-bascet-btn`);
      basketmenu = rootEl.querySelector(`#bascet-Backgr`);
      if (basketBg) {
        basketBg.addEventListener("click", onClick);
      }
      if (basketmenu) {
        basketmenu.addEventListener("click", stopPropagation);
      }
    },
    onDelete() {
      if (basketBg) {
        basketBg.removeEventListener("click", onClick);
      }
      if (basketmenu) {
        basketmenu.removeEventListener("click", stopPropagation);
      }
    },
  };
}
