module.exports = class Plant {
  id;
  name;
  price;
  imageUrl;

  constructor(id, name, price, imageUrl) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
  }
};
