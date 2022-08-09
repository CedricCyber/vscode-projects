const guestList = ["Tom", "Mary", "Clare", "John", "Liz"];
const itemsForSale = [
  {
    name: "pillow",
    price: 30,
    brand: "mainstays",
  },
  {
    name: "blanket",
    price: 40,
    brand: "mainstays",
  },
  {
    name: "pan",
    price: 20,
    brand: "Pioneer Woman",
  },
];

console.log(itemsForSale.map((item) => item.name));

let itemPriceSearch = itemsForSale.map((item) => {
  if (item.price <= 35) {
    return item.name;
  }
});

console.log(itemPriceSearch.join());
