var login = document.getElementById("loginSubmit");
login.addEventListener("click", loginSubmit);

document
  .getElementById("productSubmit")
  .addEventListener("click", productSubmit);

function loginSubmit() {
  let loginObject = {
    email: document.getElementById("email").value,
    url: document.getElementById("url").value,
    password: document.getElementById("password").value,
    check_out: document.getElementById("check-out").checked,
  };

  //alert(JSON.stringify(loginObject));
// Printing the string
var str = JSON.stringify(loginObject);
// Printing the string
document.write(str);
console.log(str);
}

function productSubmit() {
  let productObj = {
    product_no: document.getElementById("product-no").value,
    name: document.getElementById("name").value,
    unit_price: document.getElementById("unit-price").value,
    quantity: document.getElementById("quantity").value,
    supplier: document.getElementById("supplier").value,
    date_supplied: document.getElementById("date-supplied").value,
  };

  alert(JSON.stringify(productObj));
  console.log(productObj);
}


const user = { id: 4201, name: "Bob", isGraduate: true};
const {id, name, isGraduate} = user;
console.log(id + ", " + name  + ","  + isGraduate);

const names = ["Anna", "Bob"];
const [x, y] = names;
console.log(x + ", " + y);

var funcs = [];
for (var i = 0; i < 5; i++) {
funcs[i] = function() {
return i;
};
}
console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[2]());
console.log(funcs[3]());
console.log(funcs[4]());

var helper = function(n) {
  return function() {return n;}
  }
  var funcs = [];
  for (var i = 0; i < 5; i++) {
  funcs[i] = helper(i);
  };
  console.log(funcs[0]());
  console.log(funcs[1]());
  console.log(funcs[2]());
  console.log(funcs[3]());
  console.log(funcs[4]());