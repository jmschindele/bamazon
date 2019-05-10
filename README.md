# bamazon
Bamazon is a CLI App that uses Node.js to query a MySQL database.

The application first displays the list of all products available by completing a MySQL read request and looping through the table data.

The application then uses npm's inquirer to ask the user for a product ID and a quantity. 

The application then queries the database to see if there is enough product in stock to complete the transaction. 

If there is enough of the product to complete the sale, the application responds with transaction successful and persists the new quantity in the database.

If there is not enough of the product to complete the transaction, the application will respond "not enough in stock."

Video of application in use:
https://drive.google.com/file/d/1ScAG87PJ-YHD-utOUKKQrr4KcN8ZHE-X/view