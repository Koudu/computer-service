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
    description: [
      "Сокет  -  LGA1200", "Общее кол-во ядер - 6",
      "Макс. число потоков - 12", "Кол-во производ. ядер - 6",
      "Объем кэша L2 - 3 МБ", "Объем кэша L3 - 12 МБ",
      "Техпроцесс - 14 нм", "Базовая частота процессора - 2.6ГГц",
      "Тип памяти - DDR4", "Макс. поддерживаемый объем памяти - 128 ГБ",
      "Макс. частота оперативной памяти - 3200 МГц",
    ],
    img: "./assets/processor.svg",
    name: "Intel Core i5-11400f",
    price: "11 500",
  },
  {
    id: 3,
    description: [
      "Диагональ экрана - 23.8", "Макс. разрешение - 1920x1080 (FullHD)",
      "Тип подсветки матрицы - LED", "Технология изготовления матрицы -IPS",
      "Соотношение сторон - 16:9", "Покрытие экрана - матовое",
      "Поддержка HDR - нет", "Технология защиты зрения - Flicker Free, Low Blue Light",
      "Время отклика - 1 мс", "Плотность пикселей - 92 ppi",
      "Частота при макс. разрешении - 170 Гц", "Видео разъемы - DisplayPort 1.2a, HDMI 1.4b x2",
    ],
    img: "./assets/monitor.svg",
    name: '23.8" Монитор MSI G2412',
    price: "14 500",
  },
];

const cards = items.map((i) => ItemCard(i));
if (market) {
  market.innerHTML = cards.map((c) => c.render()).join("");
  name-product.addEventListener
}
cards.forEach((c) => {
  c.onRender();
});
