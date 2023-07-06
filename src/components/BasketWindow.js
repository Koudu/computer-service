// let basketBg;
// let basketmenu;

// export default function basketMenu(description) {
//   return `<div class="basket-window">${description}</div>`;
// }
// export function basketWindow(item) {
//   const click = () => {
//     if (!basketBg) {
//       return;
//     }
//     if (basketmenu.classList.contains("_inactive")) {
//       basketmenu.classList.remove("_inactive");
//       basketmenu.classList.add("_active");
//       return;
//     }
//     basketmenu.classList.add("_inactive");
//     basketmenu.classList.remove("_active");
//   };
//   return {
//     render: () => {
//       return `
//       <div class="bascet-menu">
//       <div class="bascet-background _inactive" id="bascet-Backgr">
//         <div class="bascet-product" id="bascet-product">
//         ${item.productItem}
//         </div>
//       </div>
//       </div>
//       `;
//     },
//     onRender: () => {
//       basketBg = document.getElementById(`item-bascet`);
//       basketBg = document.getElementById(`item-bascet-Backgr`);
//       basketmenu = document.getElementById(`item-bascet-Backgr`);
//       if (basketBg) {
//         basketBg.addEventListener("click", click);
//       }
//     },
//     onDelete: () => {
//       if (basketBg) {
//         basketBg.removeEventListener("click", click);
//       }
//     },
//   };
// }

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

  return {
    render(item) {
      rootEl.innerHTML = `
      <div class="basket-btn" id="item-bascet-btn">
        <div class="bascet-background ${active ? "_active" : "_inactive"}" 
          id="bascet-Backgr">
          <div class="text-bascet">Корзина</div>
          <div class="bascet-product" id="bascet-product">
          ${item.map((value) => `${value.name}: ${value.price}`).join("<br />")}
          </div>
          <button class="to-order to-order-green">Заказать</button>
        </div>
      </div>
      `;
    },
    onRender() {
      basketBg = document.getElementById(`item-bascet-btn`);
      basketmenu = document.getElementById(`bascet-Backgr`);
      if (basketBg) {
        basketBg.addEventListener("click", onClick);
      }
    },
    onDelete() {
      if (basketBg) {
        basketBg.removeEventListener("click", onClick);
      }
    },
  };
}
