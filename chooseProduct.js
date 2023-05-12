function chooseProduct(segment) {
  if (segment === "Beverage") return "Soda";
  if (segment === "Fruit") return "Apple";
  if (segment === "Hygiene") return "Soap";
}

module.exports = chooseProduct;
