const product = {
    name: 'Table',
    price: 2000
};
console.log(product);
console.log("name:", product.name);
console.log("price:", product.price);

product.link = "http://localhost/index.html";
console.log("link:", product.link);
console.log(product);

delete product.link;
console.log(product);

product.price = 1000;
console.log(product);

product.count = 2;

product.sale = function() {
    if (this.count > 0) {
        this.count--;
        console.log("Sale!");
    } else console.log("Failed!");
}

console.log(product);
product.sale();
console.log(product);
product.sale();
product.sale();
console.log(product);
