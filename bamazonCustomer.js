var mysql = require("mysql");
var inquirer = require("inquirer");
// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "",
  database: "bamazon_DB"
});
// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});
// function which prompts the user for what action they should take
function start() {
  readProducts();
}
//search a specific product
function readProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    //loop through all objects in the table
    for (var i = 0; i < res.length; i++) {
      //print out each item on its own line using template literals for formatting
      console.log(
        `ID: ${res[i].id} Product: ${res[i].product_name} Price: $${res[i].price}
        `
      );
    }
    //initialize inquirer function
    askUser();
  });
}

function askUser() {
  inquirer
    .prompt([
      {
        name: "getID",
        type: "prompt",
        message: "Please enter the ID of the product you wish to purchase."
      },
      {
        name: "getQty",
        type: "prompt",
        message: "How many would you like to purchase?"
      }
    ])
    .then(function(answer) {
      var userChoice = answer.getID;
      // console.log("user choice = " + userChoice)
      var customerQty = answer.getQty;

      connection.query(
        "SELECT * FROM products WHERE ?",
        { id: userChoice },
        function(err, res) {
          // console.log(res[0].stock_quantity)
          if (res[0].stock_quantity >= customerQty) {
            console.log("Purchase Successful");
            var currentStock = res[0].stock_quantity - customerQty;
            connection.query("UPDATE products SET ? WHERE ?", [
              {
                stock_quantity: currentStock
              },
              {
                id: userChoice
              }
            ]);
            connection.end();
          } else {
            console.log("Not enough in stock. The transaction has been canceled.");
            connection.end();
          }
        }
      );
    });
}
