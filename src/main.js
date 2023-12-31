import "./style.css";
import ItemCard from "./components/ItemCard/ItemCard";
import Basket from "./components/BasketWindow";
import { getProduct } from "./api/product";

const market = document.getElementById("market-content");
const items = [
  {
    id: 1,
    description: [
      "Сокет - LGA1200",
      "Общее кол-во ядер - 4",
      "Макс. число потоков - 8",
      "Кол-во производ. ядер - 4",
      "Объем кэша L2 - 1 МБ",
      "Объем кэша L3 - 6 МБ",
      "Техпроцесс - 14 нм",
      "Базовая частота процессора - 3.6ГГц",
      "Тип памяти - DDR4",
      "Макс. поддерживаемый объем памяти - 128 ГБ",
      "Макс. частота оперативной памяти - 2666 МГц",
    ],
    img: "./assets/Intel-Core-i3-10100f.jpg",
    name: "Intel Core i3-10100f",
    price: "5 000",
    type: "CPU",
  },
  {
    id: 2,
    description: [
      "Сокет  -  LGA1200",
      "Общее кол-во ядер - 6",
      "Макс. число потоков - 12",
      "Кол-во производ. ядер - 6",
      "Объем кэша L2 - 3 МБ",
      "Объем кэша L3 - 12 МБ",
      "Техпроцесс - 14 нм",
      "Базовая частота процессора - 2.6ГГц",
      "Тип памяти - DDR4",
      "Макс. поддерживаемый объем памяти - 128 ГБ",
      "Макс. частота оперативной памяти - 3200 МГц",
    ],
    img: "./assets/Intel-Core-i3-10100f.jpg",
    name: "Intel Core i5-11400f",
    price: "11 500",
    type: "CPU",
  },
  {
    id: 3,
    description: [
      'Диагональ экрана - 23.8"',
      "Макс. разрешение - 1920x1080 (FullHD)",
      "Тип подсветки матрицы - LED",
      "Технология изготовления матрицы -IPS",
      "Соотношение сторон - 16:9",
      "Покрытие экрана - матовое",
      "Поддержка HDR - нет",
      "Технология защиты зрения - Flicker Free, Low Blue Light",
      "Время отклика - 1 мс",
      "Плотность пикселей - 92 ppi",
      "Макс. частота обновления экрана - 170 Гц",
      "Видео разъемы - DisplayPort 1.2a, HDMI 1.4b x2",
    ],
    img: "./assets/23.8-MSI-G2412.jpg",
    name: '23.8" Монитор MSI G2412',
    price: "14 500",
    type: "Monitor",
  },
  {
    id: 4,
    description: [
      'Диагональ экрана - 27"',
      "Макс. разрешение - 2560x1440",
      "Тип подсветки матрицы - LED",
      "Технология изготовления матрицы - VA",
      "Соотношение сторон - 16:9",
      "Покрытие экрана - матовое",
      "Поддержка HDR - есть",
      "Технология защиты зрения - Flicker Free, Low Blue Light",
      "Время отклика - 1 мс",
      "Плотность пикселей - 108 ppi",
      "Макс. частота обновления экрана - 170 Гц",
      "Видео разъемы - DisplayPort 1.2a, HDMI 2.0b x2",
    ],
    img: "./assets/27-MSI-G27CQ4-E2.jpg",
    name: '27" Монитор MSI G27CQ4 E2',
    price: "25 000",
    type: "Monitor",
  },
  {
    id: 5,
    description: [
      "Общее кол-во кнопок - 8",
      "Доп. кнопки - боковые, смены DPI/CPI",
      "Программируемые кнопки - есть",
      "Кол-во программируемых кнопок - 8",
      "Макс. разрешение датчика - 20000 dpi",
      "Тип сенсора мыши - оптический светодиодный",
      "Частота опроса - 125 Гц, 500 Гц, 1000 Гц",
      "Скорость (IPS) - 650 IPS",
      "Режимы работы датчика - 400 dpi, 800 dpi, 1600 dpi, 2400 dpi, 3200 dpi",
      "Материал покрытия -матовый пластик, резина",
    ],
    img: "./assets/Razer-DeathAdder-V2.jpg",
    name: "Мышь Razer DeathAdder V2",
    price: "4 500",
    type: "Mouse",
  },
  {
    id: 6,
    description: [
      "Общее кол-во кнопок - 8",
      "Доп. кнопки - боковые кнопки, смены DPI/CPI, управления подсветкой",
      "Программируемые кнопки - есть",
      "Кол-во программируемых кнопок - 8",
      "Макс. разрешение датчика - 3200 dpi",
      "Тип сенсора мыши - оптический светодиодный",
      "Частота опроса - 125 Гц, 1000 Гц",
      "Скорость (IPS) - 30 IPS",
      "Режимы работы датчика - 100 dpi, 3200 dpi",
      "Материал покрытия -матовый пластик",
    ],
    img: "./assets/A4Tech-Bloody-ES5.jpg",
    name: "Мышь A4Tech Bloody ES5",
    price: "1 400",
    type: "Mouse",
  },
  {
    id: 7,
    description: [
      "Техпроцесс - 8 нм",
      "Штатная частота работы видеочипа - 1320 МГц",
      "Турбочастота - 1807 МГц",
      "Кол-во универсальных процессоров (ALU) - 3584",
      "Число текстурных блоко - 112",
      "Число блоков растеризации - 48",
      "Поддержка трассировки лучей -есть",
      "Аппаратное ускорение трассировки лучей (RT-ядра) - 28",
      "Тензорные ядра - 112",
      "Объем видеопамяти - 8 ГБ",
      "Тип памяти - GDDR6",
      "Разрядность шины памяти - 128 бит",
      "Макс. пропускная способность памяти - 240 Гбайт/сек",
      "Эффективная частота памяти - 15000 МГц",
      "Тип и количество видеоразъемов - DisplayPort x2, HDMI x2",
      "Версия HDMI - 2.1",
      "Версия DisplayPort - 1.4a",
      "Кол-во подключаемых одновременно мониторов - 4",
      "Макс. разрешение - 7680x4320 (8K Ultra HD)",
      "Интерфейс подключения - PCI-E 4.0",
      "Форм-фактор разъема подключения - PCI-E x16",
      "Разъемы дополнительного питания - 8 pin",
      "Рекомендуемый блок питания - 550 Вт",
      "Тип охлаждения - активное воздушное",
      "Тип и кол-во установленных вентиляторов - 2 осевых",
      "Радиатор жидкостного охлаждения - нет",
      "Низкопрофильная карта (Low Profile) - нет",
      "Кол-во занимаемых слотов расширения - 2",
      "Длина видеокарты - 198 мм",
      "Ширина видеокарты - 121 мм",
      "Толщина видеокарты - 39 мм",
      "Вес - 608 г",
    ],
    img: "./assets/GIGABYTE-GeForce-RTX-3060-GAMING-OC.jpg",
    name: "GIGABYTE GeForce RTX 3060 GAMING OC",
    price: "32 000",
    type: "Video-card",
  },
  {
    id: 8,
    description: [
      "Техпроцесс - 8 нм",
      "Штатная частота работы видеочипа - 1500 МГц",
      "Турбочастота - 1815 МГц",
      "Кол-во универсальных процессоров (ALU) - 3888",
      "Число текстурных блоко - 184",
      "Число блоков растеризации - 96",
      "Поддержка трассировки лучей -есть",
      "Аппаратное ускорение трассировки лучей (RT-ядра) - 46",
      "Тензорные ядра - 112",
      "Объем видеопамяти - 8 ГБ",
      "Тип памяти - GDDR6",
      "Разрядность шины памяти - 256 бит",
      "Макс. пропускная способность памяти - 448 Гбайт/сек",
      "Эффективная частота памяти - 14000 МГц",
      "Тип и количество видеоразъемов - DisplayPort x2, HDMI x2",
      "Версия HDMI - 2.1",
      "Версия DisplayPort - 1.4a",
      "Кол-во подключаемых одновременно мониторов - 4",
      "Макс. разрешение - 7680x4320 (8K Ultra HD)",
      "Интерфейс подключения - PCI-E 4.0",
      "Форм-фактор разъема подключения - PCI-E x16",
      "Разъемы дополнительного питания - 8 pin + 6 pin",
      "Рекомендуемый блок питания - 650 Вт",
      "Тип охлаждения - активное воздушное",
      "Тип и кол-во установленных вентиляторов - 3 осевых",
      "Радиатор жидкостного охлаждения - нет",
      "Низкопрофильная карта (Low Profile) - нет",
      "Кол-во занимаемых слотов расширения - 2.5",
      "Длина видеокарты - 286 мм",
      "Ширина видеокарты - 115 мм",
      "Толщина видеокарты - 51 мм",
      "Вес - 940 г",
    ],
    img: "./assets/GIGABYTE-GeForce-RTX-3070-GAMING-OC.jpg",
    name: "GIGABYTE GeForce RTX 3070 GAMING OC",
    price: "50 000",
    type: "Video-card",
  },
  {
    id: 9,
    description: [
      "Техпроцесс - 5 нм",
      "Штатная частота работы видеочипа - 2235 МГц",
      "Турбочастота - 2520 МГц",
      "Кол-во универсальных процессоров (ALU) - 16384",
      "Число текстурных блоко - 512",
      "Число блоков растеризации - 176",
      "Поддержка трассировки лучей -есть",
      "Аппаратное ускорение трассировки лучей (RT-ядра) - 128",
      "Тензорные ядра - 512",
      "Объем видеопамяти - 24 ГБ",
      "Тип памяти - GDDR6X",
      "Разрядность шины памяти - 384 бит",
      "Макс. пропускная способность памяти - 1008 Гбайт/сек",
      "Эффективная частота памяти - 21000 МГц",
      "Тип и количество видеоразъемов - DisplayPort x3, HDMI",
      "Версия HDMI - 2.1",
      "Версия DisplayPort - 1.4a",
      "Кол-во подключаемых одновременно мониторов - 4",
      "Макс. разрешение - 7680x4320 (8K Ultra HD)",
      "Интерфейс подключения - PCI-E 4.0",
      "Форм-фактор разъема подключения - PCI-E x16",
      "Разъемы дополнительного питания - 16 pin (12VHPWR)",
      "Рекомендуемый блок питания - 1000 Вт",
      "Тип охлаждения - активное воздушное",
      "Тип и кол-во установленных вентиляторов - 3 осевых",
      "Радиатор жидкостного охлаждения - нет",
      "Низкопрофильная карта (Low Profile) - нет",
      "Кол-во занимаемых слотов расширения - 3.5",
      "Длина видеокарты - 329.4 мм",
      "Ширина видеокарты - 137.5 мм",
      "Толщина видеокарты - 71.5 мм",
      "Вес - 2050 г",
    ],
    img: "./assets/Palit-GeForce-RTX-4090-GameRock-OmniBlack.jpg",
    name: "Palit GeForce RTX 4090 GameRock OmniBlack",
    price: "156 000",
    type: "Video-card",
  },
  {
    id: 10,
    description: [
      "Форм-фактор корпуса - Mid-Tower",
      "Операционная система - без ОС",
      "Процессор:",
      "Модель процессора - Intel Core i5-12400F",
      "Кол-во производительных ядер - 6",
      "Кол-во энергоэффективных ядер - нет",
      "Кол-во потоков - 12",
      "Базовая тактовая частота - 2.5 ГГц",
      "Автоматическое увеличение тактовой частоты - 4.4 ГГц",
      "Материнская плата:",
      "Сокет - LGA1700",
      "Чипсет - B660",
      "Кол-во слотов оперативной памяти - 4",
      "Оперативная память:",
      "Тип оперативной памяти - DDR4",
      "Форм-фактор оперативной памяти - DIMM",
      "Кол-во установленных модулей - 2",
      "Общий объем оперативной памяти - 16 ГБ",
      "Видеокарта:",
      "Тип видеокарты - дискретная",
      "Модель интегрированной видеокарты - нет",
      "Модель дискретной видеокарты - GeForce RTX 3060",
      "Тип видеопамяти - GDDR6",
      "Объем видеопамяти - 12 ГБ",
      "Накопители данных:",
      "Конфигурация твердотельных накопителей (SSD) - 512 GB M.2 PCIe",
      "Общий объем жестких дисков (HDD) - нет",
      "Разъемы на фронтальной панели:",
      "Аудиоразъемы - 3.5 мм jack (аудио/микрофон)",
      "Кард-ридер - нет",
      "Оптический привод -нет",
      "Интерфейсы/разъемы:",
      "USB порты - USB 2.0 Type-A x5, USB 3.2 Gen1 Type-A x5, USB 3.2 Gen2 Type-C x1",
      "Видеоразъемы - DisplayPort x1, HDMI x1",
      "Интернет/передача данных:",
      "Скорость сетевого адаптера - 2.5 Гбит/с",
      "Стандарт Wi-Fi - нет",
      "Версия Bluetooth - нет",
      "Дополнительная информация:",
      "Окно на боковой стенке - есть",
      "Мощность блока питания - 650 Вт",
      "Клавиатура и мышь в комплекте - нет",
      "Габариты:",
      "Длина - 456 мм",
      "Ширина - 230 мм",
      "Высота - 471 мм",
      "Конфигурация:",
      "Материнская плата - GIGABYTE B660M GAMING X DDR4",
      "Оперативная память - 8GB ADATA XPG SPECTRIX D41 RGB 3200MHz",
      "Количество планок памяти - 2",
      "Видеокарта - Palit GeForce RTX 3060 Dual (LHR) 12GB",
      "Накопители SSD - 512GB M.2 NVMe ADATA XPG SX8200 Pro",
      "Охлаждение процессора - DEEPCOOL GAMMAXX GT BK",
      "Блок питания - DEEPCOOL PK650D 650W (80+ Bronze)",
      "Корпус - DEEPCOOL CK560",
    ],
    img: "./assets/ARDOR-GAMING-RAGE-H290.jpg",
    name: "ПК ARDOR GAMING RAGE H290",
    price: "65 000",
    type: "PC",
  },
];

const categorys = ["PC", "CPU", "Video-card", "Monitor", "Mouse"];
const cart = [];
const AllCards = items.map((i) => ItemCard(i));

let currentPage = 1;
const limit = 6;
let categoryName = "All";

function getCategory(name) {
  if (categorys.includes(name)) {
    return AllCards.filter((i) => i.getType() === name);
  }
  return AllCards;
}

function getPage(pageNum, cards) {
  return getProduct(cards, (pageNum - 1) * limit, limit);
}

let currnetCards = getPage(currentPage, getCategory(categoryName));

function nextPage(cards) {
  if ((currentPage - 1) * limit >= cards.length - limit) {
    return getPage(currentPage, cards);
  }
  currentPage += 1;
  return getPage(currentPage, cards);
}

function prevPage(cards) {
  if (currentPage === 1) {
    return getPage(currentPage, cards);
  }
  currentPage -= 1;
  return getPage(currentPage, cards);
}

function renderProducts(cards) {
  if (market) {
    market.innerHTML = cards.map((c) => c.render()).join("");
  }
  cards.forEach((c) => {
    c.onRender();
  });
}

function removeListemers(cards) {
  cards.forEach((c) => c.onDelete());
}

renderProducts(currnetCards);

const body = document.querySelector("body");
const menuBackground = document.getElementById("menu-background");
const basketEl = document.getElementById("basket-root");

const basket = new Basket(basketEl);
basket.render(cart);
basket.onRender();

body?.addEventListener("click", async (e) => {
  const name = e.target.getAttribute("name");
  if (name === "item-menu" && menuBackground) {
    if (menuBackground?.classList.contains("_inactive")) {
      menuBackground.classList.remove("_inactive");
      menuBackground.classList.add("_active");
      return;
    }
    menuBackground.classList.add("_inactive");
    menuBackground.classList.remove("_active");
    return;
  }
  if (name === "item-buy") {
    const id = e.target.getAttribute("id");
    if (!id) {
      return;
    }
    const realID = Number(id.replace("item-buy-", ""));

    const productItem = items.find((a) => a.id === realID);
    cart.push(productItem);
    basket.onDelete();
    basket.render(cart);
    basket.onRender();
    return;
  }
  if (name === "All") {
    categoryName = name;
    currentPage = 1;
    removeListemers(currnetCards);
    currnetCards = getPage(currentPage, getCategory(name));
    renderProducts(currnetCards);
    return;
  }

  if (categorys.includes(name)) {
    categoryName = name;
    currentPage = 1;
    removeListemers(currnetCards);
    currnetCards = getPage(currentPage, getCategory(name));
    renderProducts(currnetCards);
    return;
  }

  if (name === "forward-btn") {
    removeListemers(currnetCards);
    currnetCards = nextPage(getCategory(categoryName));
    renderProducts(currnetCards);
    return;
  }

  if (name === "back-btn") {
    removeListemers(currnetCards);
    currnetCards = prevPage(getCategory(categoryName));
    renderProducts(currnetCards);
    // return;
  }
  // if (name === "forward-btn") {
  //   const newProduct = await getProduct(10, posts.length);
  //   if (newProduct.length === 0) {
  //     loader.innerHTML = `<div class="wrap"><h1> На этом, пока что все</h1></div>`;
  //     return;
  //   }
  // }
});
