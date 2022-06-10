  class products {
  constructor(productId, name,quantityInStock,unitPrice) {
    this.name = name;
    this.productId = productId;
    this.quantityInStock = quantityInStock;
    this.unitPrice = unitPrice;
  }

  getName() {
    return this.name;
  }

  setName(_name) {
    this.name = _name;
  }

  getproductId() {
    return this.productId;
  }

  setproductId(_productId) {
    this.productId = _productId;
  }

  getquantityInStock() {
    return this.quantityInStock;
  }

  setName(_quantityInStock) {
    this.quantityInStock = _quantityInStock;
  }

  getproductId() {
    return this.unitPrice;
  }

  setproductId(_productId) {
    this.unitPrice = _unitPrice;
  }


  toString() {
    return `Name: ${this.getName()}, productId: ${this.productId},quantityInStock: ${this.quantityInStock}, unitPrice: ${this.unitPrice}`;
  }
}

console.log("Q1");
const product = new Array();
product.push(new products("1001", "Banana","12","0.99"));
product.push(new products("1002", "Apple","64","1.85"));
product.push(new products("1003", "Carrots","125","2.70"));

product.forEach((p) => {
  console.log(p.toString());
});