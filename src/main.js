import "./style.css";
import ItemCard from "./components/ItemCard";

const market = document.getElementById("market-content");
// const productBackground = document.getElementById("product-Background");

// body?.addEventListener("click", (e) => {
//   const name = e.target.getAttribute("name");
//   console.log(productBackground);
//   if (name === "nameProduct" && productBackground) {
//     console.log(name);
//     if (productBackground?.classList.contains("_inactive")) {
//       productBackground.classList.remove("_inactive");
//       productBackground.classList.add("_active");
//       console.log("1 if");
//       return;
//     }
//     productBackground.classList.add("_inactive");
//     productBackground.classList.remove("_active");
//     console.log("2 if");
//   }
// });

const items = [
  {
    id: 1,
    description: [
      "Сокет - LGA1200", "Общее кол-во ядер - 4",
      "Макс. число потоков - 8", "Кол-во производ. ядер - 4",
      "Объем кэша L2 - 1 МБ", "Объем кэша L3 - 6 МБ",
      "Техпроцесс - 14 нм", "Базовая частота процессора - 3.6ГГц",
      "Тип памяти - DDR4", "Макс. поддерживаемый объем памяти - 128 ГБ",
      "Макс. частота оперативной памяти - 2666 МГц",
    ],
    img: "./assets/processor.svg",
    name: "Intel Core i3-10100f",
    price: "5 000",
  },
  {
    id: 2,
    description: ["Сокет  -  LGA1200", "Общее кол-во ядер - 6", ""],
    img: "./assets/processor.svg",
    name: "Intel Core i5-11400f",
    price: "11 500",
  },
];

const cards = items.map((i) => ItemCard(i));
if (market) {
  market.innerHTML = cards.map((c) => c.render()).join("");
}
cards.forEach((c) => {
  c.onRender();
});
