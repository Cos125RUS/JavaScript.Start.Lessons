const product = {
    name: 'Table',
    price: 2000,
    count: 2,
    userRegistration: false,
    registration: function () {
        this.userRegistration = true;
        console.log("Registration completed");
    },
    countProduct: function () {
        if (this.count > 0) {
            console.log("Ok");
        } else {
            console.log("Fail");
        }
    },
    buyProduct: function () {
        if (this.userRegistration) {
            console.log("Product add to cart");
        } else {
            console.log("You need registration");
        }
    }
};

console.log('');
console.log(product);
product.buyProduct();
product.registration();
product.buyProduct();

console.log('');
for (const key in product) {
    console.log(key, ":", product[key]);
}

console.log('\n', Object.keys(product));
console.log('\n', Object.values(product));
console.log('\n', Object.entries(product));